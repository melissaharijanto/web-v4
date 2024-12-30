import { styles } from '../utils/css/styles';
import DiagonalArrow from './svgs/DiagonalArrow';

const ButtonWithDiagonalArrow = ({
    link,
    label,
    className,
}: {
    link: string;
    label: string;
    className?: string;
}) => {
    return (
        <a
            href={link}
            target="_blank"
            className={`${styles['button-text']} ${styles['button']} ${styles['button-with-diagonal-arrow']} w-fit ${className}`}>
            <span className="mb-1 md:text-base text-sm">{label}</span>
            <DiagonalArrow width="w-3" fill="fill-white"></DiagonalArrow>
        </a>
    );
};

export default ButtonWithDiagonalArrow;
