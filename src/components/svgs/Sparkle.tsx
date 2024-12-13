import React from 'react';
import { SvgType } from '../../utils/types/SvgTypes';

const Sparkle: React.FC<SvgType> = ({ width, fill, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            zoomAndPan="magnify"
            className={`${width} ${className}`}
            viewBox="0 0 2250 2250.000011"
            preserveAspectRatio="xMidYMid meet"
            version="1.0">
            <defs>
                <clipPath id="178e6f78cf">
                    <path
                        d="M 0.5 0 L 2249.5 0 L 2249.5 2249 L 0.5 2249 Z M 0.5 0 "
                        clip-rule="nonzero"
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#178e6f78cf)">
                <path
                    className={fill}
                    d="M 1125 2249 C 1125 1499.183594 750.316406 1124.5 0.5 1124.5 C 750.316406 1124.5 1125 749.816406 1125 0 C 1125 749.816406 1499.683594 1124.5 2249.5 1124.5 C 1499.683594 1124.5 1125 1499.183594 1125 2249 Z M 1125 2249 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                />
            </g>
        </svg>
    );
};

export default Sparkle;
