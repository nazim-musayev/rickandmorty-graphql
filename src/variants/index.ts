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
  hidden: (initX: number) => ({
    opacity: 0,
    x: initX
  }),
  visible: (initX: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: initX === 150 ? 25 : 100,
      stiffness: 500
    }
  }),
  out: (initX: number) => ({
    opacity: 0,
    x: -(initX)
  })
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
}