import { motion } from 'framer-motion';
import { FC } from 'react';
import { AnimationLayoutProps } from '../../utils/types/AnimationTypes';

// TYPES

const AnimationLayout: FC<AnimationLayoutProps> = ({ children, className }) => {
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
