import { motion } from 'framer-motion';
import { ReactNode, FC } from 'react';

// TYPES
interface ILayoutProps {
    children: ReactNode;
    className?: string | undefined;
}

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

const AnimationLayout: FC<ILayoutProps> = ({ children, className }) => {
    const parentVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between children animations
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="hidden"
            variants={parentVariants}
            className={className} // Parent container styles
        >
            {children}
        </motion.div>
    );
};

export default AnimationLayout;
