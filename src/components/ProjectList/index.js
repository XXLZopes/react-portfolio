import React, { useState, useEffect } from 'react';
import "./index.css"

const ProjectList = ({ category }) => {

    const [projects] = useState([
       {
           name: 'Run Buddy',
           category: 'front-end',
           describe: 'asdlmsklmkjsfdmkjdk',
           link: 'https://www.google.com'
       },
       {
        name: 'Covid-19 Tracker',
        category: 'front-end',
        describe: 'asdlmsklmkjsfdmdqwdwedewdewkjdk',
        link: 'https://www.google.com'
        },
        {
            name: '',
            category: 'front-end',
            describe: 'asdlmsklsdamkjsfdmkjdk',
            link: 'https://www.google.com'
        },
        {
            name: 'Goals Social',
            category: 'full-stack',
            describe: 'asdlmsklasdasdmkjsfdmkjdk',
            link: 'https://www.google.com'
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