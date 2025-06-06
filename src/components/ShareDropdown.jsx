import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaLine, FaInstagram } from 'react-icons/fa';

const ShareDropdown = ({ shareUrl, shareText }) => {
  const [open, setOpen] = useState(false);
  const [showIGModal, setShowIGModal] = useState(false);
  const dropdownRef = useRef(null);

  const encodedUrl = encodeURIComponent(shareUrl);
  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const lineText = `${encodeURIComponent(shareText)}%0A${encodedUrl}`;
  const lineShareUrl = isMobile
    ? `https://line.me/R/share?text=${lineText}`
    : `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

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
            <a
              href={facebookShareUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg w-full text-left"
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
export default ShareDropdown;
