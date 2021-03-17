import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'

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
  let [image, setImage] = useState(0)

  
  return (
    <div className="App">
      <Nav
      categories = {categories}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
      >
      </Nav>
      <About
      image = { image }
      setImage = { setImage }
      ></About>
      <Portfolio currentCategory = {currentCategory}></Portfolio>
    </div>
  );
}

export default App;
