export const childVariants = {
    hidden: { x: '5vw', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1 },
    },
    exit: {
        opacity: 0,
        x: '-5vw',
        transition: { type: 'tween', duration: 1 },
    },
};

export const childVariantsTwo = {
    hidden: { x: '-5vw', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1 },
    },
    exit: {
        opacity: 0,
        x: '5vw',
        transition: { type: 'tween', duration: 1 },
    },
};

export const childVariantsThree = {
    hidden: { y: '5vh', opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1 },
    },
    exit: {
        opacity: 0,
        y: '-5vh',
        transition: { type: 'tween', duration: 1 },
    },
};

export const childVariantsFour = {
    hidden: { y: '-5vh', opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1 },
    },
    exit: {
        opacity: 0,
        y: '5vh',
        transition: { type: 'tween', duration: 1 },
    },
};