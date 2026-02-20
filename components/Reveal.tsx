import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  as?: 'div' | 'section';
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, as = 'div', className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out transform opacity-0 translate-y-6 ${
        visible ? 'opacity-100 translate-y-0' : ''
      } ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
export default Reveal;
