import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaLine, FaInstagram } from 'react-icons/fa';

import ShareDropdown from '../components/ShareDropdown.jsx';

const SharePage = () => {

  const apiDomain = import.meta.env.VITE_API_DOMAIN;

  const shareUrl = `${apiDomain}/share/`;
  const shareText = `該如何在立法院生存呢？\n一起來玩小遊戲吧！\n立法院生存指南上線囉！`;

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
