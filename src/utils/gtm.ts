// 為了讓所有組件都能方便地推送數據到資料層，我們應該將 pushToDataLayer 函數定義在一個全域可用的地方。
declare global {
    interface Window {
      dataLayer: any[];
    }
  }
  
  export const pushToDataLayer = (eventData: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(eventData);
      console.log('推送到資料層:', eventData);
    }
  };