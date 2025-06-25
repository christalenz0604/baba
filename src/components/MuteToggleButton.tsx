// components/MuteToggleButton.tsx
import React from "react";
import { useAudio } from "./AudioProvider";

export const MuteToggleButton: React.FC = () => {
  const { isMuted, toggleMute } = useAudio();

  return (
<button
  onClick={toggleMute}
  className="mute-button"
>
  {isMuted ? '🔇' : '🔊'}
</button>
  );
};


