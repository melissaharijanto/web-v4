import React from 'react';
import { SmallLinkProps } from '../utils/types/SmallLinkProps';
import DiagonalArrow from './svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';

const SmallLink: React.FC<SmallLinkProps> = ({ link, label }) => {
    return (
        <div className="group relative inline-block" key={label}>
            <a
                href={link}
                target="_blank"
                className={`inline-flex justify-center relative items-center ${styles['exp-link']} gap-x-1 hover:font-bold transition-all ease-in`}>
                {label}
                <span className={`${styles['navbar-underline']}`}></span>
                <DiagonalArrow fill="fill-black dark:fill-white" width="w-3" />
            </a>
        </div>
    );
};

export default SmallLink;
