import SubheadingTitle from '../components/SubheadingTitle';
import { styles } from '../utils/css/styles';

const Experience = () => {
    return (
        <div
            id="experience"
            className={`${styles.page} flex justify-center items-center`}>
            <SubheadingTitle
                title="WORK EXPERIENCE"
                flowerFill="fill-blue"></SubheadingTitle>
        </div>
    );
};

export default Experience;
