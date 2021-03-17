import React, {useEffect, useRef, useState} from 'react';
import './about.css';

function About(props) {

let {
    image=0,
    setImage,
} = props

// const coverPhoto = useRef();
let [translate, setTranslate] = useState(window.scrollY * .5)
const onScroll = function (e) {
    setTranslate(window.scrollY * .5)
    // console.log(e)
    // console.log('What translate is: ', translate)
    // console.log(window.scrollY)
    // console.log(`What translate should be: translateY(${window.scrollY * .5}px)`)
    
}

//cycle though images using useEffect()
useEffect(() => {
    let imageInterval = setInterval ( () => {
        image < 3 ? setImage(image + 1) : setImage(image = 0)
        clearInterval(imageInterval)
    }, 3000);
    
}, [image])

//scroll event
useEffect(() => {
    document.addEventListener('scroll', onScroll)
    //clean up onScroll event
    return () => {
        document.removeEventListener('scroll', onScroll);
    }
}, [] );

    return(
        <section className="about">
            <img 
            style={{transform: `translateY(${window.scrollY * .5}px)`}} 
            // style={{transform: `translateY(${translate})px` }} 
            // ref={coverPhoto} 
            id="coverPhoto" 
            src={require(`../../assets/images/coverPhotos/${image}.jpg`).default} 
            className="my-2" 
            alt="cover" 
            />
        </section>
    )
}

export default About;