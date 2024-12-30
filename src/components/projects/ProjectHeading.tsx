import React from 'react';
import { styles } from '../../utils/css/styles';
import DiagonalArrow from '../svgs/DiagonalArrow';
import { ProjectHeadingProps } from '../../utils/types/ProjectHeadingProps';

const ProjectHeading: React.FC<ProjectHeadingProps> = ({
    projectName,
    projectLink,
    textColor,
    arrowHoverColor,
}) => {
    const mapWordsToParagraphs = (str: string[]) => {
        // Split the string into words

        // Map each word into a paragraph element
        return str.map((word: string, index: number) => (
            <p key={`${word} ${index}`}>{word.trim().toUpperCase()}</p>
        ));
    };

    const groupHover = `group-hover:${arrowHoverColor}`;

    return (
        <div className="w-full flex justify-between items-center">
            <div
                className={`${styles['header-btwn-mdlg']} text-left ${textColor}`}>
                {mapWordsToParagraphs(projectName)}
            </div>
            <div>
                <a href={projectLink} target="_blank">
                    <DiagonalArrow
                        width="w-16 md:w-10 lg:w-12 xl:w-16"
                        fill={`fill-white ${groupHover} transition-all ease-in`}
                        className="group"></DiagonalArrow>
                </a>
            </div>
        </div>
    );
};

export default ProjectHeading;
