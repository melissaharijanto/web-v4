import { Description, GitHub, LinkedIn } from '@mui/icons-material';
import DiagonalArrow from '../components/svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';
import SubheadingTitle from '../components/SubheadingTitle';
import AboutLink from '../components/AboutLink';
import { links } from '../utils/data/links';

const About = () => {
    return (
        <div
            className={`${styles.page} flex flex-col justify-center items-center`}
            id="about">
            <div className="flex justify-center gap-x-8">
                <div className="flex-col flex items-start max-w-[60vw]">
                    <SubheadingTitle title="ABOUT ME" flowerFill="fill-red" />
                    <div className="mx-8  mt-10 flex flex-col items-start">
                        <p className="text-white font-manrope text-justify">
                            Hi, I’m Melissa, a software engineer passionate
                            about turning creative ideas into functional and
                            engaging digital experiences. I focus on{' '}
                            <span className="text-yellow font-semibold">
                                full-stack and front-end development
                            </span>
                            , where I enjoy combining problem-solving and design
                            to build solutions that users truly enjoy.
                        </p>
                        <br />
                        <p className="text-white font-manrope text-justify">
                            Throughout my journey, I’ve had the opportunity to
                            work on some exciting projects, such as:
                            <ul className="list-disc mx-4">
                                <li>
                                    Using Generative AI APIs with other tools
                                    like Streamlit and Python to create tools
                                    for enhanced productivity in ideation
                                    workshops, as well as a chatbot that
                                    provides students with helpful hints for
                                    Object-Oriented Programming assignments.
                                </li>
                                <li>
                                    Designing and developing a student forum
                                    that helps over 100 users connect and share
                                    knowledge, with a focus on seamless mobile
                                    responsiveness.
                                </li>
                            </ul>
                        </p>
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
                            . When I’m not coding, I also enjoy designing fun
                            posters or participating in hackathons to solve
                            interesting challenges.
                        </p>
                        <br />
                        <p className="text-white font-manrope text-justify">
                            Feel free to reach out if you’d like to collaborate
                            on an exciting project or just chat about tech!
                        </p>
                        <a
                            href="mailto:melissaharijanto18@gmail.com"
                            className={`${styles['button-text']} ${styles['button']} ${styles['button-with-diagonal-arrow']} mt-10`}>
                            <span className="mb-1">Reach out via Email</span>
                            <DiagonalArrow
                                width="w-3"
                                fill="fill-white"></DiagonalArrow>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-[0.5px] bg-white min-h-full"></div>
                </div>
                <div className="flex flex-col items-start gap-y-4">
                    <p className={`${styles.subheading} text-left`}>
                        Other ways to <br />{' '}
                        <span className="text-yellow">connect</span> with me:
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
    );
};

export default About;
