export const childVariants = {
    hidden: { x: '10vw', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1 },
    },
    exit: {
        opacity: 0,
        x: '-10vw',
        transition: { type: 'tween', duration: 1 },
    },
};