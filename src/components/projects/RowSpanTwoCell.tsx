import { styles } from '../../utils/css/styles';
import { ProjectProps } from '../../utils/types/ProjectProps';
import { SvgType } from '../../utils/types/SvgTypes';
import ProjectHeading from './ProjectHeading';
import ProjectContent from './ProjectContent';
import Fade from '../animation/Fade';

const RowSpanTwoCell: React.FC<{
    content: ProjectProps[keyof ProjectProps];
    SvgIcon: React.FC<SvgType>;
}> = ({ content, SvgIcon }) => {
    return (
        <Fade
            variants="FROM_BOTTOM"
            className={`${styles['project-container']} row-span-2`}>
            <Fade
                variants="FROM_BOTTOM"
                className={`${styles['header-btwn-mdlg']} text-left !text-yellow flex justify-between items-center`}>
                <div className="w-full">
                    <ProjectHeading
                        projectName={content.name}
                        projectLink={content.arrowLink}
                        textColor="!text-yellow"
                        arrowHoverColor="fill-blue"
                    />
                </div>
            </Fade>
            <Fade
                variants="FROM_BOTTOM"
                className="mt-4 xl:grid xl:grid-cols-[3fr_7fr] gap-x-8 place-items-center">
                <div className="xl:flex hidden">
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
            </Fade>
        </Fade>
    );
};

export default RowSpanTwoCell;
