import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaLine, FaInstagram } from 'react-icons/fa';

const ShareDropdown = ({ shareUrl, shareText }) => {
  const [open, setOpen] = useState(false);
  const [showIGModal, setShowIGModal] = useState(false);
  const dropdownRef = useRef(null);

  const encodedUrl = encodeURIComponent(shareUrl);
  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const messageText = `${shareText}\n${shareUrl}`;
  const lineText = encodeURIComponent(messageText);
  const lineShareUrl = isMobile
    ? `https://line.me/R/share?text=${lineText}`
    : `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;

  const handleFacebookShare = () => {
    if (window.FB) {
      window.FB.ui({
        method: 'share',
        href: shareUrl,
      }, function(response) {});
    } else {
      alert('Facebook SDK 尚未加載');
    }
    setOpen(false);
  };

  const handleIGShare = () => {
    const fullText = `${shareText}\n${shareUrl}`;
    navigator.clipboard.writeText(fullText);
    setShowIGModal(true);
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
    <>
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
            <button
              onClick={handleFacebookShare}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg w-full text-left"
            >
              <FaFacebookF /> 分享到 Facebook
            </button>

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

      {showIGModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-bold mb-2">Instagram 分享說明</h2>
            <p className="mb-4 text-gray-700">分享文字已自動複製，請長按下方圖片儲存，然後到 Instagram 發文。</p>
            <img src="/images/share.jpg" alt="分享圖片" className="w-full rounded-lg mb-4" />
            <button
              onClick={() => setShowIGModal(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              關閉
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const SharePage = () => {
  const shareUrl = 'https://bettertaiwan.goodwordstudio.com/share/';
  const shareText = 'Ba Party 好玩\n一起來玩小遊戲吧！';

  useEffect(() => {
    // 載入 Facebook SDK
    if (!window.FB) {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '656281544074641',
          xfbml: true,
          version: 'v18.0',
        });
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }, []);

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
