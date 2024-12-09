const RightArrow = ({
    fill = 'fill-[#FFFFFFF]',
    width,
}: {
    fill?: string;
    width: string;
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={width}
            zoomAndPan="magnify"
            viewBox="0 0 2250 2250.000011"
            preserveAspectRatio="xMidYMid meet"
            version="1.0">
            <defs>
                <clipPath id="aeffebe9a7">
                    <path
                        d="M 1348 336 L 2249.5 336 L 2249.5 1237 L 1348 1237 Z M 1348 336 "
                        clip-rule="nonzero"
                    />
                </clipPath>
                <clipPath id="c2b52176da">
                    <path
                        d="M 1461.4375 336.445312 L 2249.496094 1124.503906 L 2137.046875 1236.953125 L 1348.988281 448.894531 Z M 1461.4375 336.445312 "
                        clip-rule="nonzero"
                    />
                </clipPath>
                <clipPath id="1adbfc1823">
                    <path
                        d="M 80.007812 1044.980469 L 2169.980469 1044.980469 L 2169.980469 1204.007812 L 80.007812 1204.007812 Z M 80.007812 1044.980469 "
                        clip-rule="nonzero"
                    />
                </clipPath>
                <clipPath id="3535de0edb">
                    <path
                        d="M 1349 1012 L 2249.5 1012 L 2249.5 1913 L 1349 1913 Z M 1349 1012 "
                        clip-rule="nonzero"
                    />
                </clipPath>
                <clipPath id="b5af241e32">
                    <path
                        d="M 2249.492188 1124.5 L 1461.433594 1912.558594 L 1348.984375 1800.105469 L 2137.039062 1012.050781 Z M 2249.492188 1124.5 "
                        clip-rule="nonzero"
                    />
                </clipPath>
            </defs>
            <g clip-path="url(#aeffebe9a7)">
                <g clip-path="url(#c2b52176da)">
                    <path
                        className={fill}
                        d="M 1461.4375 336.445312 L 2249.46875 1124.472656 L 2137.019531 1236.921875 L 1348.988281 448.894531 Z M 1461.4375 336.445312 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                    />
                </g>
            </g>
            <g clip-path="url(#1adbfc1823)">
                <path
                    className={fill}
                    d="M 2169.980469 1204.007812 L 80.246094 1204.007812 L 80.246094 1044.980469 L 2169.980469 1044.980469 Z M 2169.980469 1204.007812 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                />
            </g>
            <g clip-path="url(#3535de0edb)">
                <g clip-path="url(#b5af241e32)">
                    <path
                        className={fill}
                        d="M 2249.492188 1124.5 L 1461.460938 1912.527344 L 1349.011719 1800.078125 L 2137.039062 1012.050781 Z M 2249.492188 1124.5 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                    />
                </g>
            </g>
        </svg>
    );
};

export default RightArrow;
