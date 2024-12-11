import ExperienceComponent from '../components/ExperienceComponent';
import SubheadingTitle from '../components/SubheadingTitle';
import DiagonalArrow from '../components/svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';
import { experiences } from '../utils/data/experience';
import { links } from '../utils/data/links';

const Experience = () => {
    return (
        <div
            id="experience"
            className={`${styles.page} flex flex-col justify-center items-center pt-28`}>
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
            <a
                href={links.resume}
                target="_blank"
                className={`${styles['button-text']} ${styles['button']} ${styles['button-with-diagonal-arrow']} mt-10`}>
                <span className="mb-1">See more in my resume</span>
                <DiagonalArrow width="w-3" fill="fill-white"></DiagonalArrow>
            </a>
        </div>
    );
};

export default Experience;
