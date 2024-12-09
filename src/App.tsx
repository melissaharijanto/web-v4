import React from 'react';
import './App.css';
import Flower from './components/svgs/Flower';
import { styles } from './styles';
import NavigationBar from './components/NavigationBar';

const App: React.FC = () => {
    return (
        <>
            <NavigationBar />
            <div className="w-full flex flex-col justify-center items-center min-h-screen bg-[#1e1e1e] h-screen">
                <p className={`${styles['header-sm']} mb-2`}>
                    &mdash; &nbsp;HELLO, I AM
                </p>
                <div className={`${styles['header-xl']}`}>
                    <div className="w-max flex flex-col justify-center items-center">
                        <div className="w-full flex justify-between items-center">
                            <div>MELISSA</div>
                            <div>A.</div>
                            <div>HARIJANTO</div>
                        </div>
                        <div className="w-full flex justify-between items-center gap-x-4">
                            <div>SOFTWARE</div>
                            <div className="animate-spin-slow flex justify-center items-center">
                                <Flower fill="fill-red" width="w-16"></Flower>
                            </div>
                            <div>ENGINEER</div>
                        </div>
                    </div>
                </div>
                {/* <div className="border-[1px] border-white px-4 py-2 rounded-lg flex justify-center items-center w-max mt-8">
                    <p className={`${styles['header-sm']}`}>
                        NUS COMPUTER SCIENCE UNDERGRADUATE
                    </p>
                </div> */}
                <div className="flex gap-x-4 mt-10">
                    <button
                        className={`${styles['header-sm-black']} border-[1px] border-yellow bg-yellow px-8 pt-2 pb-3 rounded-3xl `}>
                        GitHub
                    </button>
                    <button
                        className={`${styles['header-sm']} border-[1px] border-white px-8 pt-2 pb-3 rounded-3xl`}>
                        LinkedIn
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;
