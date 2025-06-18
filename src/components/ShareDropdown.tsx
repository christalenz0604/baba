import React from 'react';

interface ShareDropdownProps {
  shareUrl: string;
  shareText: string;
  imageData: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ShareDropdown: React.FC<ShareDropdownProps> = ({
  shareUrl,
  shareText,
  imageData,
  open,
  setOpen,
}) => {
  const handleShare = async (platform: string) => {
    const text = `${shareText}\n${shareUrl}`;
    
    switch (platform) {
      case 'line':
        window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(text);
        alert('已複製連結！');
        break;
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-lg font-semibold mb-4">分享結果</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleShare('line')}
            className="flex items-center justify-center p-3 bg-[#00B900] text-white rounded-lg hover:bg-opacity-90"
          >
            LINE
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="flex items-center justify-center p-3 bg-[#1877F2] text-white rounded-lg hover:bg-opacity-90"
          >
            Facebook
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="flex items-center justify-center p-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-opacity-90"
          >
            Twitter
          </button>
          <button
            onClick={() => handleShare('copy')}
            className="flex items-center justify-center p-3 bg-gray-600 text-white rounded-lg hover:bg-opacity-90"
          >
            複製連結
          </button>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="mt-4 w-full p-2 text-gray-600 hover:text-gray-800"
        >
          關閉
        </button>
      </div>
    </div>
  );
};

export default ShareDropdown; 