import SubheadingTitle from '../components/SubheadingTitle';
import { styles } from '../utils/css/styles';

const Projects = () => {
    return (
        <div
            id="projects"
            className={`${styles.page} flex justify-center min-h-screen `}>
            <SubheadingTitle title="PROJECTS" flowerFill="fill-yellow" />
        </div>
    );
};

export default Projects;
