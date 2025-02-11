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
                <div className="bg-white dark:bg-black rounded-full px-2 py-4 lg:p-4 animate-spin-slower">
                    <Flower width="w-12 lg:w-20" fill={flowerFill} />
                </div>
                <span className={`${styles['header-lg']} mb-1 mr-3`}>
                    {title}
                </span>
            </div>
        </div>
    );
};

export default SubheadingTitle;
