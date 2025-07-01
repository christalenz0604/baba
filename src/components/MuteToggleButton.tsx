// components/MuteToggleButton.tsx
import React from "react";
import { useAudio } from "./AudioProvider";
import { getImagePath } from "../utils/pathUtils";

export const MuteToggleButton: React.FC = () => {
  const { isMuted, toggleMute } = useAudio();

  return (
<button
  onClick={toggleMute}
  className="mute-button"
  style={{
    width: 'auto',
    height: 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <img
    src={getImagePath(
      isMuted
        ? "/images/icon-muted.webp"
        : "/images/icon-unmuted.webp"
    )}
    alt={isMuted ? "Unmute" : "Mute"}
    className="w-6 h-6 object-contain"
  />
</button>
  );
};