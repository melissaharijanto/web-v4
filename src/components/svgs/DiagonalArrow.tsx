const DiagonalArrow = ({
    fill = 'fill-[#FFFFFFF]',
    width,
}: {
    fill?: string;
    width: string;
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${width}`}
            zoomAndPan="magnify"
            viewBox="0 0 2250 2250.000011"
            preserveAspectRatio="xMidYMid meet"
            version="1.0">
            <defs>
                <clipPath id="acf47c5253">
                    <path
                        d="M 673.382812 0 L 2249.5 0 L 2249.5 224.898438 L 673.382812 224.898438 Z M 673.382812 0 "
                        clipRule="nonzero"
                    />
                </clipPath>
                <clipPath id="b4964a94a9">
                    <path
                        d="M 0.5 0 L 2249.5 0 L 2249.5 2249 L 0.5 2249 Z M 0.5 0 "
                        clipRule="nonzero"
                    />
                </clipPath>
                <clipPath id="f6afdb6b1a">
                    <path
                        d="M 2249.5 159.027344 L 159.527344 2249 L 0.5 2089.972656 L 2090.472656 0 Z M 2249.5 159.027344 "
                        clipRule="nonzero"
                    />
                </clipPath>
                <clipPath id="7b15b53e0c">
                    <path
                        d="M 2024.601562 0 L 2249.5 0 L 2249.5 1576.117188 L 2024.601562 1576.117188 Z M 2024.601562 0 "
                        clipRule="nonzero"
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#acf47c5253)">
                <path
                    className={fill}
                    d="M 673.382812 0 L 2249.441406 0 L 2249.441406 224.898438 L 673.382812 224.898438 Z M 673.382812 0 "
                    fillOpacity="1"
                    fillRule="nonzero"
                />
            </g>
            <g clipPath="url(#b4964a94a9)">
                <g clipPath="url(#f6afdb6b1a)">
                    <path
                        className={fill}
                        d="M 2249.5 159.027344 L 159.769531 2248.761719 L 0.738281 2089.730469 L 2090.472656 0 Z M 2249.5 159.027344 "
                        fillOpacity="1"
                        fillRule="nonzero"
                    />
                </g>
            </g>
            <g clipPath="url(#7b15b53e0c)">
                <path
                    className={fill}
                    d="M 2249.5 0 L 2249.5 1576.058594 L 2024.601562 1576.058594 L 2024.601562 0 Z M 2249.5 0 "
                    fillOpacity="1"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

export default DiagonalArrow;
