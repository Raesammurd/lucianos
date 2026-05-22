import { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
  charDelay?: number;
  transitionDuration?: number;
}

export default function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
  transitionDuration = 500,
}: AnimatedHeadingProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            // Calculate delay for this specific character
            // (lineIndex * lineLength * charDelay) is a bit tricky if lines have different lengths.
            // Let's use a cumulative index across all lines for exact staggering, or follow user's formula:
            // "Each character gets a staggered delay calculated as: (lineIndex * lineLength * charDelay) + (charIndex * charDelay)"
            // Assuming lineLength is the length of the CURRENT line, or previous lines? 
            // Better to just calculate a flat index.
            const previousCharsCount = lines
              .slice(0, lineIndex)
              .reduce((acc, curr) => acc + curr.length, 0);
            
            const globalCharIndex = previousCharsCount + charIndex;
            const delay = globalCharIndex * charDelay;

            return (
              <span
                key={charIndex}
                className="inline-block transition-all"
                style={{
                  opacity: isReady ? 1 : 0,
                  transform: isReady ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDuration: `${transitionDuration}ms`,
                  transitionDelay: `${delay}ms`,
                  // Fix for spaces getting collapsed in HTML
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
