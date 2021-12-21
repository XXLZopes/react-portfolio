import React, { useState, useEffect } from 'react';
import "./index.css"

const ProjectList = ({ category }) => {

    const [projects] = useState([
        {
            name: 'Portfolio',
            category: 'react',
            describe: 'Aidan built this website using react.js!',
            // link: ''
        },
       {
           name: 'Run Buddy',
           category: 'front-end',
           describe: 'Aidan Meyer\'s first project at the UCLA boot camp',
           link: 'https://xxlzopes.github.io/run-buddy/'
       },
       {
        name: 'Covid-19 Tracker',
        category: 'front-end',
        describe: 'Aidan\'s first team project at the UCLA boot camp',
        link: 'https://aidanguarniere.github.io/covid-19-tracker/'
        },
        {
            name: 'coming soon..',
            category: 'front-end',
            describe: 'What is next?',
            // link: ''
        },
        {
            name: 'Goals Social',
            category: 'full-stack',
            describe: 'asdlmsklasdasdmkjsfdmkjdk',
            link: 'https://goals-social-network.herokuapp.com/'
        }
    ]);

    const currentProjects = projects.filter((project) => project.category === category);

    let [translate, setTranslate] = useState(window.scrollY * -.5)
    const onScroll = () => {setTranslate(window.scrollY * -.5)}
    //scroll event
    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        //clean up onScroll event
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, [] );
    
    return (
      
            <div className="img-container grid-template-columns">
                {currentProjects.map((project, i) => (
                    <a
                    href={project.link}
                    key={project.name}
                    target="_blank"
                    >
                        <img width="60%"
                            style={{transform: `translateY(${translate}px)`}} 
                            src={require(`../../assets/images/${category}/${i}.jpg`).default}
                            alt={project.name}
                            key={project.name}
                            className="pl-img"
                        />
                    </a>
                ))}
                    
            </div>
    );
};

export default ProjectList;