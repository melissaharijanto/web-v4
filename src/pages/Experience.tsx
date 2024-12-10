import ExperienceComponent from '../components/ExperienceComponent';
import SubheadingTitle from '../components/SubheadingTitle';
import { styles } from '../utils/css/styles';
import { experiences } from '../utils/data/experience';

const Experience = () => {
    return (
        <div
            id="experience"
            className={`${styles.page} flex flex-col justify-center items-center`}>
            <SubheadingTitle
                title="EXPERIENCE"
                flowerFill="fill-blue"></SubheadingTitle>
            <div className="mt-10">
                {experiences.map((exp, index) => {
                    return (
                        <ExperienceComponent
                            index={index}
                            textColor={exp.textColor}
                            company={exp.company}
                            isLast={index == experiences.length - 1}
                            position={exp.position}
                            period={exp.period}
                            description={exp.description}
                            links={exp.links}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
