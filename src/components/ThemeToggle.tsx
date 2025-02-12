import React, { ReactElement, useEffect, useState } from 'react';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';

// taken from https://readymadeui.com/tailwind-components/form/switch-button and recustomized
const ThemeToggle: React.FC = (): ReactElement => {
    const getInitialTheme = () => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) return storedTheme;
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
        return 'dark';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="flex justify-center items-center">
            <LightModeIcon
                sx={{ mr: 1 }}
                className="dark:text-white text-black"
            />
            <label className="relative cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={theme === 'dark'}
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                />
                <div
                    className="w-11 h-6 flex items-center bg-white border-[1px] border-black 
        rounded-full peer peer-checked:after:translate-x-full
        after:absolute after:left-[2px] peer-checked:after:border-white 
        after:bg-black after:border-[1px] after:border-black after:rounded-full 
        after:h-5 after:w-5 after:transition-all peer-checked:border-white peer-checked:border-[1px] peer-checked:bg-black peer-checked:after:bg-white"
                />
            </label>
            <ModeNightIcon
                sx={{ ml: 1 }}
                className="dark:text-white text-black"
            />
        </div>
    );
};

export default ThemeToggle;
