import Sparkle from './svgs/Sparkle';
import TextRing from './svgs/TextRing';

const SpinningTextRing = () => {
    return (
        <div className="relative flex items-center justify-center w-24 rounded-full">
            <div className="w-full flex justify-center items-center">
                <Sparkle width="w-16" fill="fill-green dark:fill-yellow" />
            </div>
            <div className="absolute w-full h-full flex items-center justify-center">
                <TextRing
                    width="w-auto"
                    className="flex items-center justify-center animate-spin-slower"
                    fill="fill-black dark:fill-white"
                />
            </div>
        </div>
    );
};

export default SpinningTextRing;
