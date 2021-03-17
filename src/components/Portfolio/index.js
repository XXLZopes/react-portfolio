import React from 'react';
import './Portfolio.css'
import ProjectList from '../ProjectList'

function Portfolio(props) {
    const { currentCategory } = props

    return (
        <section id='pg-2'>
            <div>
                <h1>{currentCategory.name}</h1>
                <ProjectList category={currentCategory.name}></ProjectList>
            </div>
        </section>
    )
}

export default Portfolio;