import { useEffect, useState } from 'react';

export default function useTypewriter(
  lines: string[] = [], 
  delay: number = 75, 
  pause: number = 1000, 
  loop: boolean = true, 
  onFinish: () => void = () => {}
) {
  const [displayed, setDisplayed] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      onFinish();
      if (loop) {
        setTimeout(() => {
          setDisplayed('');
          setLineIndex(0);
          setCharIndex(0);
        }, pause);
      }
      return;
    }

    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + currentLine[charIndex]);
        setCharIndex((c) => c + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + '\n');
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines, delay, pause, loop, onFinish]);

  return displayed;
} 