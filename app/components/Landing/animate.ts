export const slideUp = {
    initial: {
        y: 300
    },
    enter: {
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5}
    }
}
export const getTextSlideUpVariants = (index: number, wait: boolean) => ({
    initial: {
      y: "100%",
    },
    open: {
      y: "0%",
      transition: { duration: 0.8, delay: wait ? 2 + 0.01 * index : 0.01 * index },
    },
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  });

export const buttonDown = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}
export const titleVariant = {
    hidden: {
        scale: 0.2,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
    },
}