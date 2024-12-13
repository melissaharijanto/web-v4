import SubheadingTitle from '../components/SubheadingTitle';
import { styles } from '../utils/css/styles';

const Projects = () => {
    return (
        <div
            id="projects"
            className={`${styles.page} flex justify-center min-h-screen items-center flex-col`}>
            <SubheadingTitle title="PROJECTS" flowerFill="fill-yellow" />
            <div className="grid grid-cols-3 w-full gap-x-4 mt-10">
                <div className="border-[1px] border-white rounded-xl ">
                    <p className={`${styles['subheading']}`}>travelLog</p>
                    <p></p>
                </div>
                <div className="border-[1px] border-white rounded-xl "></div>
                <div className="border-[1px] border-white rounded-xl "></div>
            </div>
        </div>
    );
};

export default Projects;
