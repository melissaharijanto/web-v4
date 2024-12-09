import React from 'react';
import './App.css';
import Flower from './components/svgs/Flower';
import DiagonalArrow from './components/svgs/DiagonalArrow';
import { styles } from './styles';

const App: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center min-h-screen bg-[#1e1e1e] h-screen">
            <div className="border-[1px] border-white px-4 py-2 rounded-lg flex justify-center items-center mb-2">
                <p className={`${styles['header-sm']}`}>HELLO, I AM</p>
            </div>
            <div className={`${styles['header-xl']}`}>
                <div className="w-max flex flex-col justify-center items-center">
                    <div className="w-full flex justify-between items-center">
                        <div>MELISSA</div>
                        <div>A.</div>
                        <div>HARIJANTO</div>
                    </div>
                    <div className="w-full flex justify-between items-center gap-x-4">
                        <div>SOFTWARE</div>
                        <div className="animate-spin-slow">
                            <Flower
                                hexColor="fill-[#FF746C]"
                                width="w-16"></Flower>
                        </div>
                        <div>ENGINEER</div>
                    </div>
                </div>
            </div>
            <div className="border-[1px] border-white px-4 py-2 rounded-lg flex justify-center items-center w-max mt-8">
                <p className={`${styles['header-sm']}`}>
                    NUS COMPUTER SCIENCE UNDERGRADUATE
                </p>
            </div>
        </div>
    );
};

export default App;
