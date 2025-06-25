// components/AudioProvider.tsx
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioContext = createContext<{
  isMuted: boolean;
  toggleMute: () => void;
} | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) return;

    const audio = new Audio("/media/baba_bgm.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const handleUserGesture = () => {
      audio.play().catch((e) => console.warn("Autoplay failed:", e));
      document.removeEventListener("click", handleUserGesture);
    };

    document.addEventListener("click", handleUserGesture);
  }, []);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, play }}>
      {children}
    </AudioContext.Provider>
  );
};
