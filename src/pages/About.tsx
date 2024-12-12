import { Description, GitHub, LinkedIn } from '@mui/icons-material';
import DiagonalArrow from '../components/svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';
import { motion } from 'framer-motion';
import SubheadingTitle from '../components/SubheadingTitle';
import AboutLink from '../components/AboutLink';
import { links } from '../utils/data/links';
import AnimationLayout from '../components/animation/AnimationLayout';
import {
    childVariants,
    childVariantsThree,
    childVariantsTwo,
} from '../utils/data/animation';

const About = () => {
    return (
        <div
            className={`${styles.page} pt-4 flex justify-center items-center`}
            id="about">
            <AnimationLayout className="flex flex-col justify-center items-start bg-black">
                <motion.div
                    variants={childVariants}
                    className="flex justify-start w-full">
                    <SubheadingTitle title="ABOUT ME" flowerFill="fill-blue" />
                </motion.div>
                <motion.div variants={childVariantsTwo} className="w-full">
                    <hr className="w-full"></hr>
                </motion.div>
                <motion.div
                    variants={childVariantsThree}
                    className=" mt-8 w-full flex justify-center ">
                    <div className="w-[90%] flex justify-center gap-x-8">
                        <div className="flex-col flex">
                            <div className="flex flex-col items-start">
                                <p className="text-white font-manrope text-justify">
                                    Hi, I’m Melissa, a final-year Computer
                                    Science undergraduate based in Singapore,
                                    and an aspiring software engineer passionate
                                    about turning creative ideas into functional
                                    and engaging digital experiences. I focus on{' '}
                                    <span className="text-yellow font-semibold">
                                        full-stack and front-end development
                                    </span>
                                    , where I enjoy combining problem-solving
                                    and design to build solutions that users
                                    truly enjoy.
                                </p>
                                <br />
                                <p className="text-white font-manrope text-justify">
                                    Throughout my journey, I’ve had the
                                    opportunity to work on some exciting
                                    projects, such as:
                                </p>
                                <ul className="list-disc mx-4 text-white font-manrope text-justify">
                                    <li>
                                        Using{' '}
                                        <span className="text-red font-semibold">
                                            Generative AI APIs
                                        </span>{' '}
                                        with other tools like{' '}
                                        <span className="text-red font-semibold">
                                            Streamlit
                                        </span>{' '}
                                        and{' '}
                                        <span className="text-red font-semibold">
                                            Python
                                        </span>{' '}
                                        to create tools for enhanced
                                        productivity.
                                    </li>
                                    <li>
                                        Developing a student forum with{' '}
                                        <span className="text-red font-semibold">
                                            React Typescript
                                        </span>{' '}
                                        that helps over 100 users connect and
                                        share knowledge, with a focus on
                                        seamless mobile responsiveness.
                                    </li>
                                </ul>

                                <br />
                                <p className="text-white font-manrope text-justify">
                                    I’m always excited to work with{' '}
                                    <span className="text-blue font-semibold">
                                        new emerging technologies
                                    </span>{' '}
                                    to build{' '}
                                    <span className="text-blue font-semibold">
                                        efficient, scalable, and user-friendly
                                        applications
                                    </span>
                                    . When I’m not coding, I enjoy designing fun
                                    posters or discovering new music to listen
                                    to.
                                </p>
                                <br />
                                <p className="text-white font-manrope text-justify">
                                    Feel free to reach out if you’d like to
                                    collaborate on an exciting project or just
                                    chat about tech!
                                </p>
                                <a
                                    href={links.email}
                                    className={`${styles['button-text']} ${styles['button']} ${styles['button-with-diagonal-arrow']} mt-10`}>
                                    <span className="mb-1">
                                        Reach out via Email
                                    </span>
                                    <DiagonalArrow
                                        width="w-3"
                                        fill="fill-white"></DiagonalArrow>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-[0.5px] bg-white min-h-full py-4"></div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start gap-y-4">
                                <p className={`${styles.subheading} text-left`}>
                                    Other ways to{' '}
                                    <span className="text-yellow">connect</span>{' '}
                                    with me:
                                </p>
                                <AboutLink
                                    url={links.github}
                                    Icon={GitHub}
                                    label="GITHUB"
                                />
                                <AboutLink
                                    url={links.linkedin}
                                    Icon={LinkedIn}
                                    label="LINKEDIN"
                                />
                                <AboutLink
                                    url={links.resume}
                                    Icon={Description}
                                    label="RESUME"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimationLayout>
        </div>
    );
};

export default About;
