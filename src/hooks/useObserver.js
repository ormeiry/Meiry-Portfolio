import React, { useEffect, useRef } from 'react';

export const useObserver = (instructions, options) => {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(instructions, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return ref;
};
