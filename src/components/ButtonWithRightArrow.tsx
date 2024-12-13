import React from 'react';
import { styles } from '../utils/css/styles';
import { ButtonProps } from '../utils/types/ButtonProps';
import RightArrow from './svgs/RightArrow';

const ButtonWithRightArrow: React.FC<ButtonProps> = ({
    link,
    label,
    className,
}) => {
    return (
        <a
            href={link}
            className={`${styles['button-text-black']} ${className} ${styles['button-with-right-arrow']}`}>
            {label} &nbsp;
            <div className="bg-black rounded-full p-2">
                <RightArrow width="w-4" fill="fill-white" />
            </div>
        </a>
    );
};

export default ButtonWithRightArrow;
