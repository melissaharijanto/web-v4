import AnimationLayout from '../components/animation/AnimationLayout';
import ExperienceComponent from '../components/ExperienceComponent';
import Asterisk from '../components/svgs/Asterisk';
import DiagonalArrow from '../components/svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';
import {
    childVariants,
    childVariantsFour,
    childVariantsThree,
    childVariantsTwo,
} from '../utils/data/animation';
import { experiences } from '../utils/data/experience';
import { links } from '../utils/data/links';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div
            id="experience"
            className={`${styles.page} flex justify-center items-start pb-16 pt-20 mt-8`}>
            <AnimationLayout className="flex flex-col justify-center items-center">
                <motion.div variants={childVariantsFour}>
                    <p className={`${styles['mini-subheader']}`}>
                        {'{ MY WORK EXPERIENCE }'}
                    </p>
                </motion.div>
                <div className="flex flex-col items-center justify-center">
                    <motion.div
                        variants={childVariantsTwo}
                        className="grid grid-cols-[6fr_4fr] gap-x-6 mt-4">
                        <div className={`${styles['header-xl']} text-right`}>
                            PLACES I'VE
                        </div>
                        <div className="mt-4 flex justify-start items-center">
                            <Asterisk fill="fill-red" width="w-20" />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={childVariants}
                        className="grid grid-cols-[4fr_5.5fr] mt-2 gap-x-6">
                        <div className="flex flex-col justify-center items-end">
                            <a
                                href={links.resume}
                                target="_blank"
                                className={`${styles['button-text']} ${styles['button']} ${styles['button-with-diagonal-arrow']} w-fit mt-2`}>
                                <span className="mb-1">More in my resume</span>
                                <DiagonalArrow
                                    width="w-3"
                                    fill="fill-white"></DiagonalArrow>
                            </a>
                        </div>

                        <div className={`${styles['header-xl']} text-left`}>
                            <p>WORKED AT</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={childVariantsThree} className="w-full">
                    <hr className="w-full mt-8"></hr>
                </motion.div>
                <motion.div
                    variants={childVariantsThree}
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
                </motion.div>
            </AnimationLayout>
        </div>
    );
};

export default Experience;
