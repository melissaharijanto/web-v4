import { styles } from '../utils/css/styles';
import { childVariantsThree } from '../utils/data/animation';
import ButtonWithRightArrow from './ButtonWithRightArrow';
import { motion } from 'framer-motion';
import DiagonalArrow from './svgs/DiagonalArrow';
import TravelLog from '../assets/travel-log.gif';
import ChatIcon from './svgs/ChatIcon';
import InventoryIcon from './svgs/InventoryIcon';

const BentoGrid = () => {
    return (
        <div className="grid grid-rows-[0.375fr_0.375fr_0.375fr] grid-cols-3 w-full gap-4 mt-8">
            <motion.div
                variants={childVariantsThree}
                className={`${styles['project-container']} row-span-3`}>
                <motion.div
                    variants={childVariantsThree}
                    className="flex justify-between items-center">
                    <div
                        className={`${styles['header-lg']} text-left !text-blue`}>
                        <p>TRAVEL LOG</p>
                    </div>
                    <div>
                        <a href="">
                            <DiagonalArrow
                                width="w-16"
                                fill="fill-white group-hover:fill-red transition-all ease-in"
                                className="group"></DiagonalArrow>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    variants={childVariantsThree}
                    className="mt-4 max-w-[80%]">
                    <p className={`${styles['paragraph-text']}`}>
                        I contributed as a full-stack developer for a travel
                        planner mobile app made with React Native, Firebase and
                        Google Maps API. Tested with React Native Testing
                        Library. This was my first software project and it has a
                        special place in my heart {':)'}
                    </p>
                    <div className="mt-4">
                        <ButtonWithRightArrow
                            link=""
                            label="View Repository"
                            className={`${styles['yellow-button']}`}
                        />
                    </div>
                </motion.div>
                <motion.div
                    variants={childVariantsThree}
                    className="w-full flex justify-center items-center mt-8">
                    <img src={TravelLog} className="w-full" />
                </motion.div>
            </motion.div>

            <div className={`${styles['project-container']} row-span-2`}>
                <div
                    className={`${styles['header-lg']} text-left !text-yellow flex justify-between items-center`}>
                    <p>PINUS STUDY</p>
                    <a href="">
                        <DiagonalArrow
                            width="w-16"
                            fill="fill-white group-hover:fill-blue transition-all ease-in"
                            className="group "></DiagonalArrow>
                    </a>
                </div>
                <div className="mt-4 grid grid-cols-[3fr_7fr] gap-x-8 place-items-center">
                    <div>
                        <ChatIcon width="w-full" fill="fill-blue" />
                    </div>
                    <div>
                        <p className={`${styles['paragraph-text']}`}>
                            Study forum for Indonesian students in NUS, built
                            with React Typescript and Go. Contributed to Figma
                            prototype and UI/UX, frontend development, backend
                            integration, and spotting documentation
                            discrepancies to implementation.
                        </p>
                        <div className="mt-4">
                            <ButtonWithRightArrow
                                label="View Repository"
                                link=""
                                className={styles['red-button']}
                            />
                        </div>
                    </div>
                </div>

                <p></p>
            </div>
            <div className={`${styles['project-container']} row-span-1 pb-8`}>
                <div
                    className={`${styles['header-lg']} text-left !text-red flex justify-between items-center`}>
                    <div>
                        <p>CLASS-</p>
                        <p>ROOM 360</p>
                    </div>
                    <a href="">
                        <DiagonalArrow
                            width="w-16"
                            fill="fill-white group-hover:fill-yellow transition-all ease-in"
                            className="group "></DiagonalArrow>
                    </a>
                </div>
                <div className="mt-4">
                    <p className={`${styles['paragraph-text']}`}>
                        Top 15 Finalist for LifeHack 2023, a hackathon run by
                        NUS Computing Club. Tackling an EdTech-related prompt,
                        we built a 3D virtual classroom with React360.
                        Contributed to the UI development.
                    </p>
                </div>
                <div className="mt-4">
                    <ButtonWithRightArrow
                        label="View Repository"
                        className={styles['blue-button']}
                        link=""
                    />
                </div>
            </div>

            <div className={`${styles['project-container']} row-span-2`}>
                <div
                    className={`${styles['header-lg']} text-left !text-yellow flex justify-between items-center`}>
                    <div>
                        <p>TRACKO</p>
                        <p>(DESKTOP)</p>
                    </div>
                    <a href="">
                        <DiagonalArrow
                            width="w-16"
                            fill="fill-white group-hover:fill-blue transition-all ease-in"
                            className="group "></DiagonalArrow>
                    </a>
                </div>
                <div className="mt-4 grid grid-cols-[6fr_4fr] gap-x-8 place-items-center">
                    <div>
                        <p className={styles['paragraph-text']}>
                            Desktop application for order and inventory tracking
                            built with Java, JavaFX and Gradle. Contributed to
                            the implementation of features and the UI (full
                            contribution list here).
                        </p>
                        <div className="mt-4">
                            <ButtonWithRightArrow
                                label="View Repository"
                                link=""
                                className={styles['red-button']}
                            />
                        </div>
                    </div>
                    <InventoryIcon width="w-full" fill="fill-blue" />
                </div>

                <div></div>
            </div>
            <div className={`${styles['project-container']} row-span-1 pb-8`}>
                <div
                    className={`${styles['header-lg']} text-left !text-red flex justify-between items-center`}>
                    <div>
                        <p>FEMIN-</p>
                        <p>NOVATE</p>
                    </div>
                    <a href="">
                        <DiagonalArrow
                            width="w-16"
                            fill="fill-white group-hover:fill-yellow transition-all ease-in"
                            className="group "></DiagonalArrow>
                    </a>
                </div>
                <div className="mt-4">
                    <p className={styles['paragraph-text']}>
                        {' '}
                        Top 6 Finalist for TCS Sustainathon 2023. A job portal
                        to support women who are attempting to pursue a career
                        in STEM. Contributed to the UI/UX design and front-end
                        implementation.
                    </p>
                </div>
                <div className="mt-4">
                    <ButtonWithRightArrow
                        label="View Repository"
                        className={styles['blue-button']}
                        link=""
                    />
                </div>
            </div>
        </div>
    );
};

export default BentoGrid;
