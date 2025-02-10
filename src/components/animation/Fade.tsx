import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const fromRight = {
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

const fromLeft = {
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

const fromBottom = {
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

const fromTop = {
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

type FadeVariant = 'FROM_LEFT' | 'FROM_BOTTOM' | 'FROM_RIGHT' | 'FROM_TOP';

const Fade = ({
    children,
    variants,
    className,
}: {
    children: ReactNode;
    variants?: FadeVariant | undefined;
    className?: string | undefined;
}) => {
    const variantsMapping = {
        FROM_BOTTOM: fromBottom,
        FROM_TOP: fromTop,
        FROM_LEFT: fromLeft,
        FROM_RIGHT: fromRight,
    };
    return (
        <motion.div
            variants={variants ? variantsMapping[variants] : fromBottom}
            className={className}>
            {children}
        </motion.div>
    );
};

export default Fade;
