import { useState, useEffect } from 'react';

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const useWindowInnerSize = () => {
  const [innerSize, setInnerSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setInnerSize(getWindowSize());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return innerSize;
};

export default useWindowInnerSize;
