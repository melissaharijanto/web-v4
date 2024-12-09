import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => {
    return (
        <>
            <NavigationBar />
            <Home />
            <About />
        </>
    );
};

export default App;
