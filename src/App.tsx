import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './pages/Footer';

const App: React.FC = () => {
    return (
        <main className={'min-h-screen bg-black'}>
            <NavigationBar />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </main>
    );
};

export default App;
