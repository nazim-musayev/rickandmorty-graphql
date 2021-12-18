export const portal = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [1, 1.2],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1.5
    }
  },
  out: {
    opacity: 0
  }
} as any;

export const categoryVariants = {
  hover: {
    scale: 1.2
  },
  tap: {
    scale: 1.05
  }
} as any;

export const characterCards = {
  hidden: {
    opacity: 0,
    x: -200
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 100,
      stiffness: 500
    }
  },
  out: {
    opacity: 0,
    x: 200
  }
};

export const episodeCards = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
   
  },
  out: {
    opacity: 0
  }
};

export const locationCards = {
  hidden: {
    opacity: 0,
    x: -150
  },
  visible: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: 150
  }
};