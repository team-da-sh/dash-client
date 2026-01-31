import { useState } from 'react';

export const useHeartToggle = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  return { isHeartFilled, toggleHeart };
};
