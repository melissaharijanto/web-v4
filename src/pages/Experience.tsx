import AnimationLayout from '../components/animation/AnimationLayout';
import ExperienceComponent from '../components/ExperienceComponent';
import SubheadingTitle from '../components/SubheadingTitle';
import DiagonalArrow from '../components/svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';
import { childVariants } from '../utils/data/animation';
import { experiences } from '../utils/data/experience';
import { links } from '../utils/data/links';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div id="experience" className={`${styles.page}`}>
            <AnimationLayout className="flex flex-col justify-center items-center  min-h-screen">
                <motion.div variants={childVariants}>
                    <SubheadingTitle
                        title="EXPERIENCE"
                        flowerFill="fill-blue"></SubheadingTitle>
                </motion.div>
                <motion.div variants={childVariants} className="mt-10">
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
                </motion.div>
                <motion.div variants={childVariants}>
                    <a
                        href={links.resume}
                        target="_blank"
                        className={`${styles['button-text']} ${styles['button']} ${styles['button-with-diagonal-arrow']} mt-10`}>
                        <span className="mb-1">See more in my resume</span>
                        <DiagonalArrow
                            width="w-3"
                            fill="fill-white"></DiagonalArrow>
                    </a>
                </motion.div>
            </AnimationLayout>
        </div>
    );
};

export default Experience;
