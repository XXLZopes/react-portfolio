import React, {useEffect, useRef, useState} from 'react';
import './about.css';

function About(props) {
let [translate, setTranslate] = useState(window.scrollY * .5)
let {
    image=0,
    setImage,
} = props

const coverPhoto = useRef();
const onScroll = function (e) {
    setTranslate(window.scrollY * .5)

    // console.log(e)
    // console.log(window.scrollY)
    console.log(`What translate should be: translateY(${window.scrollY * .5}px)`)
    console.log('What translate is: ', translate)
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
        <section>
            <h1 id="about">Who is Aidan Meyer?</h1>
            <img 
            style={{transform: `translateY(${window.scrollY * .5}px)`}} 
            // style={{transform: `translateY(${translate})px` }} 
            ref={coverPhoto} 
            id="coverPhoto" 
            src={require(`../../assets/images/coverPhotos/${image}.jpg`).default} 
            className="my-2" 
            alt="cover" 
            />
        </section>
    )
}

export default About;