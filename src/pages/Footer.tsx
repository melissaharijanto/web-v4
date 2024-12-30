import AnimationLayout from '../components/animation/AnimationLayout';
import DiagonalArrow from '../components/svgs/DiagonalArrow';
import { styles } from '../utils/css/styles';
import { childVariantsThree } from '../utils/data/animation';
import { motion } from 'framer-motion';
import { footerLinks, links } from '../utils/data/links';

const Footer = () => {
    return (
        <div
            className={`min-h-[80vh] relative mt-32 w-full flex flex-col justify-between`}>
            <div />
            <div
                className={`grid grid-cols-[3fr_7fr] place-items-center relative`}>
                <div />
                <AnimationLayout className="w-full">
                    <div className="w-full">
                        <motion.div
                            variants={childVariantsThree}
                            className="flex items-center gap-x-8">
                            <p className={`${styles['header-xl']}`}>
                                GET IN TOUCH
                            </p>
                            <a
                                href={links.email}
                                className="border-2 border-white rounded-full p-4 group hover:border-yellow transition-all ease-in mt-3">
                                <DiagonalArrow
                                    width="w-10"
                                    fill={
                                        'fill-white group-hover:fill-yellow transition-all ease-in'
                                    }
                                    className="group"
                                />
                            </a>
                        </motion.div>
                        <motion.div variants={childVariantsThree}>
                            <hr className="w-full mt-4"></hr>
                        </motion.div>
                        <motion.div
                            variants={childVariantsThree}
                            className={`${styles['paragraph-text']} text-left grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] mx-4 gap-x-4 my-4`}>
                            <motion.div variants={childVariantsThree}>
                                <p className="font-bold !text-yellow">
                                    Melissa Anastasia Harijanto
                                </p>
                                <p>National University of Singapore (NUS)</p>
                                <p>Computer Science Undergraduate</p>
                            </motion.div>
                            <motion.div
                                variants={childVariantsThree}
                                className="flex flex-col">
                                <p className="font-bold">What I Do</p>
                                {footerLinks.one.map((label) => {
                                    return <p>{label.label}</p>;
                                })}
                            </motion.div>
                            <motion.div
                                variants={childVariantsThree}
                                className="flex flex-col">
                                <p className="font-bold">Contact</p>
                                {footerLinks.two.map((link) => {
                                    return (
                                        <a
                                            href={link.link}
                                            target="_blank"
                                            className="!text-blue hover:font-bold !hover:text-blue-pressed transition-all ease-in">
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </motion.div>
                            <motion.div
                                variants={childVariantsThree}
                                className="flex flex-col">
                                <p className="font-bold">Projects</p>
                                {footerLinks.three.map((link) => {
                                    return (
                                        <a
                                            href={link.link}
                                            target="_blank"
                                            className="!text-blue hover:font-bold !hover:text-blue-pressed transition-all ease-in">
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>
                </AnimationLayout>
            </div>
            <div className="flex text-right items-start flex-col mx-8 my-8">
                <p className={`${styles['paragraph-text']} !text-xs font-bold`}>
                    &copy; 2024 Melissa Anastasia Harijanto
                </p>
            </div>
        </div>
    );
};

export default Footer;
