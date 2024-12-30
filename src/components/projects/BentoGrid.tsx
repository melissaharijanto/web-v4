import ChatIcon from '../svgs/ChatIcon';
import InventoryIcon from '../svgs/InventoryIcon';
import React from 'react';
import { ProjectProps } from '../../utils/types/ProjectProps';
import RowSpanThreeCell from './RowSpanThreeCell';
import RowSpanTwoCell from './RowSpanTwoCell';
import RowSpanOneCell from './RowSpanOneCell';

const BentoGrid: React.FC<{ projects: ProjectProps }> = ({ projects }) => {
    return (
        <div className="grid grid-rows-[0.375fr_0.375fr_0.375fr] grid-cols-3 w-full gap-2 mt-4">
            <RowSpanThreeCell content={projects.one} />
            <RowSpanTwoCell content={projects.two} SvgIcon={ChatIcon} />
            <RowSpanOneCell content={projects.three} />
            <RowSpanTwoCell content={projects.four} SvgIcon={InventoryIcon} />
            <RowSpanOneCell content={projects.five} />
        </div>
    );
};

export default BentoGrid;
