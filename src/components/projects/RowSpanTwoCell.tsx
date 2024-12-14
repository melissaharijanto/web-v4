import { styles } from '../../utils/css/styles';
import { childVariantsThree } from '../../utils/data/animation';
import { ProjectProps } from '../../utils/types/ProjectProps';
import { SvgType } from '../../utils/types/SvgTypes';
import { motion } from 'framer-motion';
import ProjectHeading from './ProjectHeading';
import ProjectContent from './ProjectContent';

const RowSpanTwoCell: React.FC<{
    content: ProjectProps[keyof ProjectProps];
    SvgIcon: React.FC<SvgType>;
}> = ({ content, SvgIcon }) => {
    return (
        <motion.div
            variants={childVariantsThree}
            className={`${styles['project-container']} row-span-2`}>
            <motion.div
                variants={childVariantsThree}
                className={`${styles['header-btwn-mdlg']} text-left !text-yellow flex justify-between items-center`}>
                <div className="w-full">
                    <ProjectHeading
                        projectName={content.name}
                        projectLink={content.arrowLink}
                        textColor="!text-yellow"
                        arrowHoverColor="fill-blue"
                    />
                </div>
            </motion.div>
            <motion.div
                variants={childVariantsThree}
                className="mt-4 grid grid-cols-[3fr_7fr] gap-x-8 place-items-center">
                <div>
                    <SvgIcon width="w-full" fill="fill-blue" />
                </div>
                <div>
                    <ProjectContent
                        content={content.content}
                        buttonClass={styles['red-button']}
                        buttonLabel="View Repository"
                        buttonLink={content.buttonLink}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default RowSpanTwoCell;
