import { useEffect, useState } from 'react';

export default function useTypewriter(lines = [], delay = 75, pause = 1000, loop = true, onFinish = () => {}, skip = false) {
  const [displayed, setDisplayed] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    if (skip) {
		setDisplayed(lines.join('\n'));
		onFinish();
		return;
	}


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
  }, [charIndex, lineIndex, skip]);

  return displayed;
}
