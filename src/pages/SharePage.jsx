import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaLine, FaInstagram } from 'react-icons/fa';

const ShareDropdown = ({ shareUrl, shareText }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const encodedUrl = encodeURIComponent(shareUrl);
  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // 使用換行字元\n（需雙重 encode）
  const messageText = `${shareText}\n${shareUrl}`;
  const lineText = encodeURIComponent(messageText);
  const lineShareUrl = isMobile
    ? `https://line.me/R/share?text=${lineText}`
    : `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;

  const handleIGShare = () => {
    const fullText = `${shareText}\n${shareUrl}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        navigator.share({
          title: '分享內容',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.error('分享失敗：', error);
        navigator.clipboard.writeText(fullText);
        alert('連結已複製！可以貼到 IG 限動或貼文');
      }
    } else {
      navigator.clipboard.writeText(fullText);
      alert('連結已複製！可以貼到 IG 限動或貼文');
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="fixed bottom-4 right-4 z-50"
    >
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        🔗 分享
      </button>

      {open && (
        <div className="mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-2">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            <FaFacebookF /> 分享到 Facebook
          </a>

          <a
            href={lineShareUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg"
          >
            <FaLine /> 分享到 LINE
          </a>

          <button
            onClick={handleIGShare}
            className="flex items-center gap-2 px-4 py-2 text-pink-600 hover:bg-pink-50 rounded-lg w-full text-left"
          >
            <FaInstagram /> 分享到 Instagram
          </button>
        </div>
      )}
    </div>
  );
};

const SharePage = () => {
  const shareUrl =  'https://bettertaiwan.goodwordstudio.com/share/';
  const shareText = 'Ba Party 好玩\n一起來玩小遊戲吧！';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">我的作品頁面</h1>
        <p className="text-gray-700">歡迎點右下角按鈕分享給好友！</p>
      </div>
      <ShareDropdown shareUrl={shareUrl} shareText={shareText} />
    </div>
  );
};

export default SharePage;
