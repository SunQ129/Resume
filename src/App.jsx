import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Community from './components/Community';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Community />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
