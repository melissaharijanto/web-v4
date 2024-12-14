import { styles } from '../../utils/css/styles';
import { childVariantsThree } from '../../utils/data/animation';
import { ProjectProps } from '../../utils/types/ProjectProps';
import ProjectContent from './ProjectContent';
import ProjectHeading from './ProjectHeading';
import { motion } from 'framer-motion';
import TravelLog from '../../assets/travel-log.gif';

const RowSpanThreeCell: React.FC<{
    content: ProjectProps[keyof ProjectProps];
}> = ({ content }) => {
    return (
        <motion.div
            variants={childVariantsThree}
            className={`${styles['project-container']} row-span-3`}>
            <motion.div
                variants={childVariantsThree}
                className="flex justify-between items-center">
                <ProjectHeading
                    projectName={content.name}
                    projectLink={content.arrowLink}
                    textColor={'!text-blue'}
                    arrowHoverColor={'fill-red'}
                />
            </motion.div>
            <motion.div
                variants={childVariantsThree}
                className="mt-4 max-w-[80%]">
                <ProjectContent
                    content={content.content}
                    buttonLink={content.buttonLink}
                    buttonLabel={'View Repository'}
                    buttonClass={`${styles['yellow-button']}`}
                />
            </motion.div>
            {/** PROJECT 1 IMAGE HERE */}
            <motion.div
                variants={childVariantsThree}
                className="w-full flex justify-center items-center mt-8">
                <img src={TravelLog} className="w-full" />
            </motion.div>
        </motion.div>
    );
};

export default RowSpanThreeCell;
