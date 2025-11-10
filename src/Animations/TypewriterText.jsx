import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const TypewriterText = ({ children, speed = 50, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayed, setDisplayed] = useState('');

  // Convert children to plain text for typing
  const fullText = React.Children.toArray(children).map(child => {
    if (typeof child === 'string') return child;
    if (React.isValidElement(child)) return child.props.children || '';
    return '';
  }).join('');

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, fullText, speed]);

  return <span className={className} ref={ref}>{displayed}</span>;
};

export default TypewriterText;
