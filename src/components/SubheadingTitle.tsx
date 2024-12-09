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
            <div className="flex justify-between items-center gap-x-2 px-2 py-2 border-white border-[1px] w-fit rounded-full">
                <div className="bg-black rounded-full p-2">
                    <Flower width="w-4" fill={flowerFill} />
                </div>
                <span className={`${styles['header-sm']} mb-1 mr-3`}>
                    {title}
                </span>
            </div>
        </div>
    );
};

export default SubheadingTitle;
