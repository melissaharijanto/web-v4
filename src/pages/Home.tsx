import Flower from '../components/svgs/Flower';
import { styles } from '../utils/css/styles';
import RightArrow from '../components/svgs/RightArrow';
import AnimationLayout from '../components/animation/AnimationLayout';
import { motion } from 'framer-motion';
import { childVariants } from '../utils/data/animation';
import { links } from '../utils/data/links';
import FlowerTwo from '../components/svgs/FlowerTwo';

const Home = () => {
    return (
        <div
            id="home"
            className={`${styles.page} pt-4 overflow-hidden relative min-h-screen`}>
            <FlowerTwo
                width="w-20"
                fill="fill-blue"
                className="top-[-12vh] right-[-5vw] absolute w-80 opacity-30 animate-zoom-bounce"
            />

            <FlowerTwo
                width="w-20"
                fill="fill-yellow"
                className="bottom-0 left-[-5vw] absolute w-80 opacity-30 animate-zoom-bounce"
            />
            <AnimationLayout className="flex flex-col justify-center items-center min-h-screen">
                <motion.p
                    variants={childVariants}
                    className={`${styles['header-sm']} mb-2`}>
                    &mdash; &nbsp;HELLO, I AM
                </motion.p>
                <div className={`${styles['header-xl']}`}>
                    <motion.div
                        variants={childVariants}
                        className="w-max flex flex-col justify-center items-center">
                        <div className="w-full flex justify-between items-center">
                            <div>MELISSA</div>
                            <div>A.</div>
                            <div>HARIJANTO</div>
                        </div>
                        <div className="w-full flex justify-between items-center gap-x-4">
                            <div>SOFTWARE</div>
                            <div className="animate-spin-slow flex justify-center items-center mt-4">
                                <Flower fill="fill-red" width="w-16"></Flower>
                            </div>
                            <div>ENGINEER</div>
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
                    <a
                        href={links.linkedin}
                        className={`${styles['button-text-black']} ${styles['blue-button']} ${styles['button-with-right-arrow']}`}>
                        LinkedIn Profile &nbsp;
                        <div className="bg-black rounded-full p-2">
                            <RightArrow width="w-4" fill="fill-white" />
                        </div>
                    </a>
                </motion.div>
            </AnimationLayout>
        </div>
    );
};

export default Home;
