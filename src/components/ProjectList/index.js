import React, { useState } from 'react';

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

    return (
      
            <div className="flex-row">
                {currentProjects.map((project, i) => (
                    <a
                    href={project.link}
                    key={project.name}
                    >
                        <img
                            src={require(`../../assets/images/${category}/${i}.jpg`).default}
                            alt={project.name}
                            key={project.name}
                            className="img-thumbnail mx-1"
                        />
                    </a>
                ))}
            </div>
    );
};

export default ProjectList;