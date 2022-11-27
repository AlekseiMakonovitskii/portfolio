import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import React, {useState} from 'react';
import firstProject from '../src/images/firstProject.jpg'
import secondProject from '../src/images/secondProject.jpg'
import thirdProject from '../src/images/thirdProject.jpg'

function App() {
  const [isAbout, setIsAbout] = useState(true);
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
  ]

  const changePage = (value) => {
    setIsAbout(value)
  }

  return (
    <div className="App">
      <Header activePage={isAbout} onChangePage={changePage}/>
      {isAbout ? <About /> : <Projects projects={projects}/>}
      <Footer />
    </div>
  );
}

export default App;
