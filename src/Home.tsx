import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './landing/App_landing.jsx';
import App from './App.tsx';
import SharePage from './pages/SharePage';
import ComingSoon from './pages/ComingSoon.jsx';
import { pushToDataLayer } from './utils/gtm.ts'

function Home() {
  const location = useLocation(); // 獲取當前路由資訊

  useEffect(() => {
    // 監聽 location 物件的變化 (即路由變化)
    // 每次路由改變時，推送到資料層一個虛擬頁面瀏覽事件
    pushToDataLayer({
      event: 'virtual_page_view', // GTM 觸發器的事件名稱
      pagePath: location.pathname, // 當前頁面的路徑 (例如: "/", "/landing", "/main", "/share")
      pageTitle: getPageTitle(location.pathname) // 加上頁面標題，方便 GA4 辨識
    });
  }, [location]); // 當 location 改變時觸發 useEffect

  // 輔助函數：根據路徑獲取頁面標題
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return '即將推出';
      case '/landing': return '遊戲引導頁';
      case '/main': return '遊戲主程式';
      case '/share': return '分享頁面';
      default: return '未知頁面';
    }
  };

  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/main" element={<App />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
  );
}
export default Home;
