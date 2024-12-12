import { styles } from '../utils/css/styles';
import Flower from './svgs/Flower';

const SubheadingTitle = ({
    title,
    flowerFill,
}: {
    title: string;
    flowerFill: string;
}) => {
    return (
        <div>
            <div className="flex justify-start items-center gap-x-2 rounded-full">
                <div className="bg-black rounded-full p-4 animate-spin-slower">
                    <Flower width="w-20" fill={flowerFill} />
                </div>
                <span className={`${styles['header-lg']} mb-1 mr-3`}>
                    {title}
                </span>
            </div>
        </div>
    );
};

export default SubheadingTitle;
