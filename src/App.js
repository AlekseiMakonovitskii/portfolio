import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import React, { useState, useEffect } from 'react';
import firstProject from '../src/images/firstProject.jpg';
import secondProject from '../src/images/secondProject.jpg';
import thirdProject from '../src/images/thirdProject.jpg';
import project4 from '../src/images/project4.jpg'
import project5 from '../src/images/project5.jpg'
import project6 from '../src/images/project6.jpg'

function App() {
  const [isAbout, setIsAbout] = useState(true);
  const [isLanguage, setIsLanguage] = useState('RUS');

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang === 'ENG' || lang === 'RUS') {
      setIsLanguage(lang);
    }
  }, [])

  const projects = [
    {
      img: firstProject,
      title: 'Simple House',
      category: 'HTML/CSS',
      url: 'https://simple-house-qvod.netlify.app/',
    },

    {
      img: secondProject,
      title: 'Tokyo Blog',
      category: 'HTML/CSS',
      url: 'https://tokyo-blog-responsive-website.netlify.app/',
    },

    {
      img: thirdProject,
      title: 'Dream Store',
      category: 'HTML/CSS',
      url: 'https://dream-store-responsive.netlify.app/',
    },

    {
      img: project4,
      title: 'Rock Paper Scissors',
      category: 'JavaScript',
      url: 'https://alekseimakonovitskii.github.io/Rock-Paper-Scissors-Game/',
    },

    {
      img: project5,
      title: 'Weather App',
      category: 'JavaScript',
      url: 'https://qvodweatherapp.netlify.app/',
    },

    {
      img: project6,
      title: 'Exchange Rate App',
      category: 'JavaScript',
      url: 'https://makon-exchange-rate-app.netlify.app/',
    },
  ];

  const changePage = value => {
    setIsAbout(value);
  };

  const changeLanguage = () => {
		if (isLanguage === 'RUS') {
			setIsLanguage('ENG');
      localStorage.setItem('lang', 'ENG')
		} 

		if (isLanguage === 'ENG') {
			setIsLanguage('RUS');
      localStorage.setItem('lang', 'RUS')
		}

  
	}

  return (
    <div className="App">
      <Header
        activePage={isAbout}
        onChangePage={changePage}
        language={isLanguage}
        onChangeLang={changeLanguage}
      />
      {isAbout ? (
        <About language={isLanguage} />
      ) : (
        <Projects projects={projects} />
      )}
      <Footer language={isLanguage} />
    </div>
  );
}

export default App;
