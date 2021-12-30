import React, { useState, useEffect } from 'react';
import "./index.css"

const ProjectList = ({ category }) => {

    const [projects] = useState([
        {
            name: 'Portfolio',
            category: 'react',
            describe: 'This portfolio was built using React.js',
            // link: ''
        },
        {
            name: 'coming soon 0',
            category: 'react',
            describe: '',
            // link: ''
        },
        {
            name: 'coming soon 1',
            category: 'react',
            describe: '',
            // link: ''
        },
       {
           name: 'Run Buddy',
           category: 'front-end',
           describe: 'Run Buddy was built as practice for a mock company that helped trainers connect with joggers',
           link: 'https://xxlzopes.github.io/run-buddy/'
       },
       {
        name: 'Covid-19 Tracker',
        category: 'front-end',
        describe: 'This project works with the Google map API and CSC\'s API to track Covid Cases in the US',
        link: 'https://aidanguarniere.github.io/covid-19-tracker/'
        },
        {
            name: 'Snake Game',
            category: 'front-end',
            describe: 'A re-creation of the snake game that utilizes the CSS grid',
            link: 'https://xxlzopes.github.io/games/'
        },
        {
            name: 'Goals Social',
            category: 'full-stack',
            describe: 'This is a full stack social medea that uses MySQL and Sequelize to store user data and host the server',
            link: 'https://goals-social-network.herokuapp.com/'
        },
        {
            name: 'coming soon 3',
            category: 'full-stack',
            describe: '',
            // link: ''
        },
        {
            name: 'coming soon 4',
            category: 'full-stack',
            describe: '',
            // link: ''
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
                        <p className="describe" style={{transform: `translateY(${translate}px)`, color: "ivory"}}>{project.describe}</p>
                        
                    </a>

                ))}
                
            </div>
    );
};

export default ProjectList;