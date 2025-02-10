import { styles } from '../../utils/css/styles';
import { ProjectProps } from '../../utils/types/ProjectProps';
import ProjectContent from './ProjectContent';
import ProjectHeading from './ProjectHeading';
import TravelLog from '../../assets/travel-log.gif';
import Fade from '../animation/Fade';

const RowSpanThreeCell: React.FC<{
    content: ProjectProps[keyof ProjectProps];
}> = ({ content }) => {
    return (
        <Fade
            variants="FROM_BOTTOM"
            className={`${styles['project-container']} row-span-3`}>
            <Fade
                variants="FROM_BOTTOM"
                className="flex justify-between items-center">
                <ProjectHeading
                    projectName={content.name}
                    projectLink={content.arrowLink}
                    textColor={'!text-blue'}
                    arrowHoverColor={'fill-red'}
                />
            </Fade>
            <Fade variants="FROM_BOTTOM" className="mt-4">
                <ProjectContent
                    content={content.content}
                    buttonLink={content.buttonLink}
                    buttonLabel={'View Repository'}
                    buttonClass={`${styles['yellow-button']}`}
                />
            </Fade>
            {/** PROJECT 1 IMAGE HERE */}
            <Fade
                variants="FROM_BOTTOM"
                className="w-full flex justify-center items-center mt-8">
                <img src={TravelLog} className="w-full" />
            </Fade>
        </Fade>
    );
};

export default RowSpanThreeCell;
