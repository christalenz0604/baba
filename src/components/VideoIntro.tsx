import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoIntro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.onended = () => {
        navigate('/results'); // 根據你的路由決定跳去哪一頁
      };
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/videos/intro.mp4" // 將 mp4 檔放 public/videos/
        className="w-full h-full object-cover"
        muted
        playsInline
      />
    </div>
  );
};

export default VideoIntro;
