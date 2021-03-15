import React, {useEffect} from 'react';
import Canvas from '../Canvas';

function About(props) {
let {
    image=0,
    setImage
} = props

//cycle though images using useEffect()
useEffect(() => {
    let imageInterval = setInterval ( () => {
        image < 3 ? setImage(image + 1) : setImage(image = 0)
        clearInterval(imageInterval)
    }, 3000)
    
}, [image])


    return(
        <section>
            <h1 id="about">Who is Aidan Meyer?</h1>
            <canvas>{Canvas={Canvas}}</canvas>
            {/* <img src={require(`../../assets/images/coverPhotos/${image}.jpg`).default} className="my-2" style={{width: "50%", margin: "0, 2000px, 0, 2000px"}} alt="cover" /> */}
        </section>
    )
}

export default About;