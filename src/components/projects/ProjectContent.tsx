import React from 'react';
import { styles } from '../../utils/css/styles';
import ButtonWithRightArrow from '../ButtonWithRightArrow';
import { ProjectContentProps } from '../../utils/types/ProjectContentProps';

const ProjectContent: React.FC<ProjectContentProps> = ({
    buttonClass,
    content,
    buttonLink,
    buttonLabel,
}) => {
    return (
        <>
            <p className={`${styles['paragraph-text']}`}>{content}</p>
            <div className="mt-4">
                <ButtonWithRightArrow
                    link={buttonLink}
                    label={buttonLabel}
                    className={buttonClass}
                />
            </div>
        </>
    );
};

export default ProjectContent;
