import React from 'react';

interface TUseSwiper {
  images: string[];
  autoPlayDuration?: number;
  isVisible: boolean;
}

const useSwiper = ({ images, autoPlayDuration = 3500, isVisible }: TUseSwiper) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isStoppedByUser, setIsStoppedByUser] = React.useState(false);

  const numImages = images.length;
  const prevIndex = (activeIndex - 1 + numImages) % numImages;
  const nextIndex = (activeIndex + 1) % numImages;

  React.useEffect(() => {
    if (!isStoppedByUser) handleIsPlayingChange();
  }, [isVisible]);

  const handleIsPlayingDisable = () => {
    setIsPlaying(false);
    setIsStoppedByUser(true);
  };

  const handleIsPlayingChange = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handlePrev = () => {
    handleIsPlayingDisable();
    setActiveIndex(prevIndex);
  };

  const handleNext = () => {
    handleIsPlayingDisable();
    setActiveIndex(nextIndex);
  };

  const handlePaginationClick = (index: number) => () => {
    handleIsPlayingDisable();
    setActiveIndex(index);
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      setActiveIndex(nextIndex);
      setIsStoppedByUser(false);
    } else {
      setIsStoppedByUser(true);
    }

    handleIsPlayingChange();
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => setActiveIndex(nextIndex), autoPlayDuration);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, nextIndex]);

  return {
    activeIndex,
    prevIndex,
    nextIndex,
    handlePrev,
    handleNext,
    handlePlayPause,
    isPlaying,
    handlePaginationClick,
  };
};

export default useSwiper;
