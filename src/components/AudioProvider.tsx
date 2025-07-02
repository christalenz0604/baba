// components/AudioProvider.tsx
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioContext = createContext<{
  isMuted: boolean;
  toggleMute: () => void;
  play: () => void;
  mute: () => void;
  unmute: () => void;
} | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isUserMuted, setIsUserMuted] = useState(false); // 使用者是否主動靜音
  const [isMuted, setIsMuted] = useState(false);

  const play = () => {
    if (!audioRef.current) {
      const audio = new Audio("/media/baba_bgm.mp3");
      audio.loop = true;
      audio.volume = 0.5;
      audio.playbackRate = 0.75;
      audioRef.current = audio;

      // 嘗試播放
      audio.play().catch((e) => console.warn("Autoplay failed:", e));
    } else {
      audioRef.current.muted = false;
      audioRef.current.play().catch((e) => console.warn("Replay failed:", e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const nextMuted = !isUserMuted;
    setIsUserMuted(nextMuted);
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const mute = () => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const unmute = () => {
    if (audioRef.current && !isUserMuted) { // 只在使用者沒有靜音時才恢復聲音
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, play, mute, unmute }}>
      {children}
    </AudioContext.Provider>
  );
};
