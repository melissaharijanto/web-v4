import { styles } from '../../utils/css/styles';
import { ProjectProps } from '../../utils/types/ProjectProps';
import Fade from '../animation/Fade';
import ProjectContent from './ProjectContent';
import ProjectHeading from './ProjectHeading';

const RowSpanOneCell: React.FC<{
    content: ProjectProps[keyof ProjectProps];
}> = ({ content }) => {
    return (
        <Fade
            variants="FROM_BOTTOM"
            className={`${styles['project-container']} row-span-1 pb-6`}>
            <Fade
                variants="FROM_BOTTOM"
                className={`${styles['header-btwn-mdlg']} text-left !text-red flex justify-between items-center`}>
                <ProjectHeading
                    projectName={content.name}
                    projectLink={content.arrowLink}
                    textColor="!text-red"
                    arrowHoverColor="fill-yellow"
                />
            </Fade>
            <Fade variants="FROM_BOTTOM" className="mt-4">
                <ProjectContent
                    content={content.content}
                    buttonClass={`${styles['blue-button']}`}
                    buttonLabel="View Repository"
                    buttonLink={content.buttonLink}
                />
                <p className={`${styles['paragraph-text']}`}></p>
            </Fade>
        </Fade>
    );
};

export default RowSpanOneCell;
