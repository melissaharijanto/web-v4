import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';

const App: React.FC = () => {
    return (
        <>
            <NavigationBar />
            <Home />
            <About />
            <Experience />
        </>
    );
};

export default App;
