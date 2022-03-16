import { useEffect, useRef, useState } from 'react';

const useResponsiveWidth = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    setWidth(element.clientWidth);
    const handleResize = () => {
      setWidth(element.clientWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, elementRef };
};

export default useResponsiveWidth;
