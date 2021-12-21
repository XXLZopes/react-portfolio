import React, {useState, useEffect} from 'react';
import './Portfolio.css'
import ProjectList from '../ProjectList'

function Portfolio(props) {
    const { currentCategory } = props

    let [translate, setTranslate] = useState(window.scrollY * .5)
    const onScroll = () => {setTranslate(window.scrollY * .5)}
    //scroll event
    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        //clean up onScroll event
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, [] );


    return (
        <section id='pg-2'>
            <div className='style-div'>
                <h1 style={{
                    transform: `translateY(${window.scrollY * -.2}px)`}} className='p-h1'>Projects</h1>
                <ProjectList category={currentCategory.name}></ProjectList>
            </div>
            
        </section>
    )
}

export default Portfolio;