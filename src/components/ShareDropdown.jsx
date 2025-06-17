import React, { useState, useEffect, useRef } from 'react';
import {
  FaFacebookF,
  FaLine,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const ShareDropdown = ({
  shareUrl,
  shareText,
  imageData,
  onOpenChange,
  open: controlledOpen,
  setOpen: setControlledOpen
}) => {
  const isControlled = controlledOpen !== undefined && setControlledOpen !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const setOpen = isControlled ? setControlledOpen : setUncontrolledOpen;

  const [showIGModal, setShowIGModal] = useState(false);
  const dropdownRef = useRef(null);

  const encodedUrl = encodeURIComponent(shareUrl);
  const messageText = `${shareText}\n${shareUrl}`;

  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const lineText = messageText.replace(/\n/g, '%0A');
  const lineShareUrl = isMobile
    ? `https://line.me/R/share?text=${lineText}`
    : `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;

  const quote = shareText;
  const hashtag = "#派對遊戲";



  useEffect(() => {
    if (onOpenChange) onOpenChange(open);
  }, [open, onOpenChange]);
  
  const handleFacebookShare = () => {
    let url = '';
    setOpen(false);
    if (isMobile) {
        url = `/fb-share-popup.html?platform=facebook&url=${encodedUrl}&quote=${encodeURIComponent(quote)}&hashtag=${encodeURIComponent(hashtag)}`;
    } else {
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent(quote)}&hashtag=${encodeURIComponent(hashtag)}`;
    }
	
    const popup = window.open(
      url,
      '_blank',
      'width=600,height=600'
    );

    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      alert("請允許瀏覽器開啟彈出式視窗，以便進行分享。");
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`;
    window.open(twitterUrl, '_blank');
    setOpen(false);
  };

  const handleThreadsShare = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      alert("已複製分享內容，即將前往 Threads，請貼上後發文");
      window.open('https://www.threads.net/', '_blank');
    } catch (err) {
      alert("複製失敗，請手動貼上內容：\n" + `${shareText}\n${shareUrl}`);
    } finally {
      setOpen(false);
    }
  };

  const handleIGShare = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setShowIGModal(true);

      // 延遲 300ms 才關閉 dropdown，避免 modal 跳不出來
      setTimeout(() => {
        setOpen(false);
      }, 300);
    } catch (err) {
      alert("複製失敗，請手動貼上內容：\n" + messageText);
      setShowIGModal(true);
      setTimeout(() => {
        setOpen(false);
      }, 300);
    }
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
        <div className="relative inline-block text-left" ref={dropdownRef}>
        {/* 不再顯示小小的分享按鈕 */}
        {open && (
          <div className="mt-2 w-64 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-2 space-y-1">
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
              onClick={handleTwitterShare}
              className="flex items-center gap-2 px-4 py-2 text-blue-400 hover:bg-blue-50 rounded-lg w-full text-left"
            >
              <FaTwitter /> 分享到 Twitter
            </button>

            <button
              onClick={handleThreadsShare}
              className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <FaThreads /> 分享到 Threads
            </button>

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
            <h2 className="text-xl font-bold mb-4">Instagram 分享說明</h2>
            <p className="mb-3 text-gray-700">
            ✅ 分享文字已自動複製。<br />
             ⬇️ 點下方儲存圖片，再前往 Instagram 發文貼上內容。
            </p>

            <img
              src="/images/share_1200x630.png"
              alt="分享圖片"
              className="w-full rounded-lg mb-4 border"
            />

            <a
              href="/images/share_1200x630.png"
              download="分享圖.png"
              className="inline-block mb-3 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
            >
              ⬇️ 儲存圖片
            </a>

            <br />

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mb-3 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
            >
              前往 Instagram
            </a>

            <br />

            <button
              onClick={() => setShowIGModal(false)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              關閉
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareDropdown;
