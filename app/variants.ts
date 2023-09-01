export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const hoverScale = {
  scale: 1.3,
  transition: { duration: '300ms' },
};

export const tapScale = {
  scale: 0.9,
};

export const hoverRotateScale = {
  rotate: [0, 45, 90, 135, 180, 135, 90, 45, 0],
  transition: { duration: '300ms' },
};

export const hoverSlideUp = {
  y: [0, 30],
  transition: { duration: '300ms' },
};
