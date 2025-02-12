import AnimationLayout from '../components/animation/AnimationLayout';
import Fade from '../components/animation/Fade';
import ButtonWithDiagonalArrow from '../components/ButtonWithDiagonalArrow';
import ExperienceComponent from '../components/ExperienceComponent';
import HorizontalLine from '../components/HorizontalLine';
import Asterisk from '../components/svgs/Asterisk';
import { styles } from '../utils/css/styles';
import { experiences } from '../utils/data/experience';
import { links } from '../utils/data/links';

const Experience = () => {
    return (
        <div
            id="experience"
            className={`${styles.page} flex justify-center items-start pb-16 pt-20 mt-8`}>
            <AnimationLayout className="flex flex-col justify-center items-center">
                <Fade variants="FROM_RIGHT">
                    <p
                        className={`${styles['mini-subheader']} lg:!text-orange dark:lg:!text-yellow !text-blue`}>
                        {'{ MY WORK EXPERIENCE }'}
                    </p>
                </Fade>
                <div className="flex flex-col items-center justify-center">
                    <Fade
                        variants="FROM_LEFT"
                        className="flex items-center flex-col-reverse lg:grid lg:grid-cols-[6fr_4fr] lg:gap-x-4 lg:gap-y-0 gap-y-2 mt-4">
                        <div className={`${styles['header-lg']} text-right`}>
                            PLACES I'VE
                        </div>
                        <div className="lg:mt-2 flex justify-start items-center">
                            <Asterisk fill="fill-red" width="w-12" />
                        </div>
                    </Fade>
                    <Fade
                        variants="FROM_RIGHT"
                        className="flex flex-col-reverse lg:grid lg:grid-cols-[4fr_5.5fr] mt-2 lg:gap-x-4 lg:gap-y-0 gap-y-2">
                        <div className="flex flex-col justify-center items-center lg:items-end">
                            <ButtonWithDiagonalArrow
                                link={links.resume}
                                label="More in my resume"
                                className="mt-2"
                            />
                        </div>

                        <div className={`${styles['header-lg']} text-left`}>
                            <p>WORKED AT</p>
                        </div>
                    </Fade>
                </div>
                <Fade variants="FROM_BOTTOM" className="w-full">
                    <HorizontalLine className="mt-8" />
                </Fade>
                <Fade
                    variants="FROM_BOTTOM"
                    className="mt-10 w-[90%] flex-col justify-center items-center">
                    {experiences.map((exp, index) => {
                        return (
                            <ExperienceComponent
                                key={`${exp.company} ${exp.period}`}
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
                </Fade>
            </AnimationLayout>
        </div>
    );
};

export default Experience;
