import Flower from '../components/svgs/Flower';
import { styles } from '../utils/css/styles';
import AnimationLayout from '../components/animation/AnimationLayout';
import { motion } from 'framer-motion';
import { childVariants } from '../utils/data/animation';
import { links } from '../utils/data/links';
import FlowerTwo from '../components/svgs/FlowerTwo';
import ButtonWithRightArrow from '../components/ButtonWithRightArrow';

const Home = () => {
    return (
        <div
            id="home"
            className={`${styles.page} pt-4 overflow-hidden relative min-h-screen`}>
            <FlowerTwo
                width="w-64"
                fill="fill-blue"
                className="top-[-6vh] md:top-[-12vh] right-[-15vw] md:right-[-5vw] absolute md:w-80 opacity-30 animate-zoom-bounce"
            />

            <FlowerTwo
                width="w-64"
                fill="fill-yellow"
                className="bottom-0 left-[-8vw] left-[-15vw] md:left-[-10vw] lg:left-[-5vw] absolute md:w-80 opacity-30 animate-zoom-bounce"
            />
            <AnimationLayout className="w-full flex flex-col justify-center items-center min-h-screen">
                <motion.p
                    variants={childVariants}
                    className={`${styles['header-sm']} mb-2`}>
                    &mdash; &nbsp;HELLO, I AM
                </motion.p>
                <div className={`${styles['header-xl']}`}>
                    <motion.div
                        variants={childVariants}
                        className="w-full flex flex-col justify-center items-center">
                        <div className="w-full flex justify-center md:!text-white text-red md:justify-between items-center">
                            <div>MELISSA</div>
                            <div className="md:flex hidden">A.</div>
                            <div className="md:flex hidden">HARIJANTO</div>
                        </div>
                        <div className="w-full md:flex justify-between items-center gap-x-4 hidden">
                            <div>SOFTWARE</div>
                            <div className="animate-spin-slow flex justify-center items-center mt-3 lg:mt-4">
                                <Flower
                                    fill="fill-red"
                                    width="md:w-10 lg:w-16"></Flower>
                            </div>
                            <div>ENGINEER</div>
                        </div>
                        <div
                            className={`w-full flex justify-center items-center gap-x-4 md:hidden ${styles['header-sm']} !text-2xl`}>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </motion.div>
                </div>

                {/* <div className="border-[1px] border-white px-4 py-2 rounded-lg flex justify-center items-center w-max mt-8">
                    <p className={`${styles['header-sm']}`}>
                        NUS COMPUTER SCIENCE UNDERGRADUATE
                    </p>
                </div> */}
                <motion.div variants={childVariants} className="mt-8">
                    <p className={`${styles['subheading']}`}>
                        Creating substantial impact through{' '}
                        <span className="text-yellow">software</span>.
                    </p>
                </motion.div>

                <motion.div
                    variants={childVariants}
                    className="flex gap-x-4 mt-8">
                    <ButtonWithRightArrow
                        link={links.linkedin}
                        label={`LinkedIn Profile`}
                        className={`${styles['blue-button']}`}
                    />
                </motion.div>
            </AnimationLayout>
        </div>
    );
};

export default Home;
