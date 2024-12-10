import { styles } from '../utils/css/styles';
import { links } from '../utils/data/links';
import DiagonalArrow from './svgs/DiagonalArrow';
import Logo from './svgs/Logo';

const NavigationBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gradient-to-b from-[#121212] to-transparent backdrop-blur-md z-10">
            <div className="mx-8 flex-1">
                <a href="#home">
                    <Logo width="w-16" />
                </a>
            </div>
            <div className="flex flex-1 gap-x-8 justify-center">
                <a href="#home" className={`${styles['navbar-link']}`}>
                    Home
                    <span className={`${styles['navbar-underline']}`} />
                </a>
                <a href="#about" className={`${styles['navbar-link']}`}>
                    About
                    <span className={`${styles['navbar-underline']}`} />
                </a>
                <a href="#experience" className={`${styles['navbar-link']}`}>
                    Experience
                    <span className={`${styles['navbar-underline']}`} />
                </a>
                <a href="#projects" className={`${styles['navbar-link']}`}>
                    Projects
                    <span className={`${styles['navbar-underline']}`} />
                </a>
            </div>
            <div className="mx-8 flex flex-1 justify-end">
                <a href={links.email} className={`${styles['navbar-link']}`}>
                    <div className="flex gap-x-2 justify-center items-center">
                        Contact Me
                        <DiagonalArrow
                            width="w-3"
                            fill="fill-white"></DiagonalArrow>
                    </div>
                    <span className={`${styles['navbar-underline']}`} />
                </a>
            </div>
        </div>
    );
};

export default NavigationBar;
