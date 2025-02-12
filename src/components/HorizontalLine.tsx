const HorizontalLine = ({
    width,
    className,
}: {
    width?: string;
    className?: string;
}) => {
    const combinedClassName = `${width ? width : 'w-full'} ${className}`;
    return (
        <hr className={`${combinedClassName} border-black dark:border-white`} />
    );
};

export default HorizontalLine;
