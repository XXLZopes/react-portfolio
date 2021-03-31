import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {

  const [categories] = useState([
    {
      name: 'react',
      description: "All my web applications that used Facebook's React."
    },
    {
      name: 'front-end',
      description: "All my front end web applications."
    },
    {
      name: 'back-end',
      description: "Video's illustrate my backend projects"
    },
    {
      name: 'full-stack',
      description: "All my deployed"
    }
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  let [image, setImage] = useState(0)

  
  return (
    <div className="App" data-scroll data-scroll-speed="1000000">
      <Nav
      categories = {categories}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      setResumeSelected={setResumeSelected}
      >
      </Nav>
      <About
      image = { image }
      setImage = { setImage }
      ></About>
      {!contactSelected ? <Portfolio currentCategory = {currentCategory}></Portfolio> : <Contact></Contact>}
      {resumeSelected ? <Resume></Resume> : ''}
      {/* <Portfolio currentCategory = {currentCategory}></Portfolio> */}
    </div>
  );
}

export default App;
