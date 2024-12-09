import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <>
            <NavigationBar />
            <Home />
        </>
    );
};

export default App;
