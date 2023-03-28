import { useState, useEffect, RefObject } from 'react';

interface UseIsVisibleProps {
  ref: RefObject<HTMLElement>;
}

export const useIsVisible = ({ ref }: UseIsVisibleProps): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight && bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return isVisible;
};
