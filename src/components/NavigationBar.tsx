import { useEffect, useState } from 'react';
import { styles } from '../utils/css/styles';
import { links } from '../utils/data/links';
import DiagonalArrow from './svgs/DiagonalArrow';
import Logo from './svgs/Logo';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="flex flex-col fixed w-full z-50 ">
            <div
                className={`flex items-center justify-between px-4 py-1 md:py-2 backdrop-blur-lg transition-all duration-300 ease-in  ${
                    isScrolled
                        ? 'backdrop-opacity-100 bg-white/60 dark:bg-black/60'
                        : 'backdrop-opacity-0'
                } z-10`}>
                <div className="md:mx-8 ml-2 md:flex-1">
                    <a href="#home">
                        <Logo width="w-12 md:w-16" />
                    </a>
                </div>
                <div className="md:flex hidden flex md:flex-1 gap-x-8 items-center justify-center">
                    <a href="#home" className={`${styles['navbar-link']}`}>
                        Home
                        <span className={`${styles['navbar-underline']}`} />
                    </a>
                    <a href="#about" className={`${styles['navbar-link']}`}>
                        About
                        <span className={`${styles['navbar-underline']}`} />
                    </a>
                    <a
                        href="#experience"
                        className={`${styles['navbar-link']}`}>
                        Experience
                        <span className={`${styles['navbar-underline']}`} />
                    </a>
                    <a href="#projects" className={`${styles['navbar-link']}`}>
                        Projects
                        <span className={`${styles['navbar-underline']}`} />
                    </a>
                </div>
                <div className="md:flex hidden mx-8 flex md:flex-1 items-center justify-end">
                    <a
                        href={links.email}
                        className={`${styles['navbar-link']}`}>
                        <div className="flex gap-x-2 justify-center items-center">
                            Contact Me
                            <DiagonalArrow
                                width="w-3"
                                fill="fill-black dark:fill-white"></DiagonalArrow>
                        </div>
                        <span className={`${styles['navbar-underline']}`} />
                    </a>
                </div>
                <div className="md:hidden flex justify-end relative cursor-pointer">
                    <MenuIcon
                        className="text-black dark:text-white"
                        sx={{
                            width: '30px',
                            transform: open ? 'rotate(90deg)' : null,
                            zIndex: 99,
                            transition: 'transform 150ms ease',
                        }}
                        onClick={() => setOpen(() => !open)}
                    />
                </div>
            </div>
            {/* MOBILE MODAL */}
            <div className="justify-end items-end flex">
                <div
                    className={`md:hidden flex-col ${
                        open ? 'flex' : 'hidden'
                    } items-end mt-2 mr-2 bg-black/60 backdrop-blur-lg border-[1px] rounded-xl z-[99] 
                    } !text-base px-6 py-2`}>
                    <a href={`#home`} className={`${styles['navbar-link']}`}>
                        Home
                    </a>
                    <a href={`#about`} className={`${styles['navbar-link']}`}>
                        About
                    </a>
                    <a
                        href={`#experience`}
                        className={`${styles['navbar-link']}`}>
                        Experience
                    </a>
                    <a
                        href={`#projects`}
                        className={`${styles['navbar-link']}`}>
                        Projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
