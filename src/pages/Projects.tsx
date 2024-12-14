import { styles } from '../utils/css/styles';
import AnimationLayout from '../components/animation/AnimationLayout';
import { motion } from 'framer-motion';
import { childVariants, childVariantsTwo } from '../utils/data/animation';
import SpinningTextRing from '../components/SpinningTextRing';
import BentoGrid from '../components/projects/BentoGrid';
import { projects } from '../utils/data/projects';

const Projects = () => {
    return (
        <div
            id="projects"
            className={`${styles.page} flex justify-center items-center flex-col pt-20 mt-8`}>
            <AnimationLayout className="flex flex-col justify-center items-center min-h-screen">
                {/* <SubheadingTitle title="PROJECTS" flowerFill="fill-yellow" /> */}
                <motion.div
                    variants={childVariants}
                    className="flex justify-start w-full items-center gap-x-4">
                    <SpinningTextRing />
                    <div className={`text-left ${styles['header-lg']}`}>
                        <p>SOFTWARE I'VE WORKED ON</p>
                    </div>
                </motion.div>
                <motion.div variants={childVariantsTwo} className="w-full">
                    <hr className="w-full mt-8"></hr>
                </motion.div>
                <BentoGrid projects={projects} />
            </AnimationLayout>
        </div>
    );
};

export default Projects;
