import AnimationLayout from '../components/animation/AnimationLayout';
import DiagonalArrow from '../components/svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';
import { footerLinks, links } from '../utils/data/links';
import Asterisk from '../components/svgs/Asterisk';
import Fade from '../components/animation/Fade';

const Footer = () => {
    return (
        <div
            className={`h-screen lg:h-[80vh] lg:min-h-[80vh] relative mt-32 w-full flex flex-col justify-between`}>
            <div />
            <div
                className={`flex flex-col justify-center items-center lg:grid lg:grid-cols-[1fr_3fr] lg:place-items-center relative`}>
                <div />
                <AnimationLayout className="w-full">
                    <div className="w-full">
                        <Fade
                            variants="FROM_BOTTOM"
                            className="flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-y-4 lg:gap-y-0 lg:gap-x-4">
                            <Asterisk
                                width="w-20"
                                fill="fill-red"
                                className="mt-2"
                            />
                            <p className={`${styles['header-xl']}`}>
                                GET IN
                                <span className="lg:hidden">
                                    <br />
                                </span>{' '}
                                TOUCH
                            </p>
                            <a
                                href={links.email}
                                className="border-2 rounded-full p-3 lg:p-4 group border-orange dark:border-yellow transition-all ease-in mt-3 hover:motion-safe:animate-pulse">
                                <DiagonalArrow
                                    width="w-6 lg:w-10"
                                    fill={
                                        'fill-orange dark:fill-yellow transition-all ease-in'
                                    }
                                    className="group"
                                />
                            </a>
                        </Fade>
                        <Fade
                            className="w-full lg:block hidden"
                            variants="FROM_BOTTOM">
                            <hr className="w-[90%] lg:w-full mt-4 dark:border-white border-black"></hr>
                        </Fade>
                        <Fade
                            variants="FROM_BOTTOM"
                            className={`${styles['paragraph-text']} !text-sm !text-left lg:grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] mx-4 gap-x-4 my-4`}>
                            <Fade
                                variants="FROM_BOTTOM"
                                className="lg:block hidden">
                                <p className="font-bold !text-orange dark:!text-yellow">
                                    Melissa Anastasia Harijanto
                                </p>
                                <p>National University of Singapore (NUS)</p>
                                <p>Computer Science Undergraduate</p>
                            </Fade>
                            <Fade
                                variants="FROM_BOTTOM"
                                className="lg:block hidden">
                                <p className="font-bold">What I Do</p>
                                {footerLinks.one.map((label) => {
                                    return <p>{label.label}</p>;
                                })}
                            </Fade>
                            <Fade
                                variants="FROM_BOTTOM"
                                className="flex flex-wrap gap-x-4 lg:flex-col justify-center items-center lg:justify-start lg:items-start">
                                <p className="font-bold">Contact</p>
                                {footerLinks.two.map((link) => {
                                    return (
                                        <p>
                                            <a
                                                href={link.link}
                                                target="_blank"
                                                className="!text-blue hover:font-bold !hover:text-blue-pressed transition-all ease-in">
                                                {link.label}
                                            </a>
                                        </p>
                                    );
                                })}
                            </Fade>
                            <Fade
                                variants="FROM_BOTTOM"
                                className="lg:block hidden">
                                <p className="font-bold">Projects</p>
                                {footerLinks.three.map((link) => {
                                    return (
                                        <p>
                                            <a
                                                href={link.link}
                                                target="_blank"
                                                className="!text-blue hover:font-bold !hover:text-blue-pressed transition-all ease-in">
                                                {link.label}
                                            </a>
                                        </p>
                                    );
                                })}
                            </Fade>
                        </Fade>
                    </div>
                </AnimationLayout>
            </div>
            <div className="flex items-center lg:items-start flex-col mx-8 my-8">
                <p className={`${styles['paragraph-text']} !text-xs font-bold`}>
                    &copy; 2024 Melissa Anastasia Harijanto
                </p>
            </div>
        </div>
    );
};

export default Footer;
