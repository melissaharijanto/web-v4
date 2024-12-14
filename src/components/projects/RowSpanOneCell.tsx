import { styles } from '../../utils/css/styles';
import { childVariantsThree } from '../../utils/data/animation';
import { ProjectProps } from '../../utils/types/ProjectProps';
import ProjectContent from './ProjectContent';
import ProjectHeading from './ProjectHeading';
import { motion } from 'framer-motion';

const RowSpanOneCell: React.FC<{
    content: ProjectProps[keyof ProjectProps];
}> = ({ content }) => {
    return (
        <motion.div
            variants={childVariantsThree}
            className={`${styles['project-container']} row-span-1 pb-8`}>
            <motion.div
                variants={childVariantsThree}
                className={`${styles['header-btwn-mdlg']} text-left !text-red flex justify-between items-center`}>
                <ProjectHeading
                    projectName={content.name}
                    projectLink={content.arrowLink}
                    textColor="!text-red"
                    arrowHoverColor="fill-yellow"
                />
            </motion.div>
            <motion.div variants={childVariantsThree} className="mt-4">
                <ProjectContent
                    content={content.content}
                    buttonClass={`${styles['blue-button']}`}
                    buttonLabel="View Repository"
                    buttonLink={content.buttonLink}
                />
                <p className={`${styles['paragraph-text']}`}></p>
            </motion.div>
        </motion.div>
    );
};

export default RowSpanOneCell;
