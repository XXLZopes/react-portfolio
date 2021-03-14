import React, {useEffect} from 'react';

function About(props) {
let {
    image=0,
    setImage
} = props

useEffect(() => {
    let imageInterval = setInterval ( () => {
        image < 3 ? setImage(image + 1) : setImage(image = 0)
        clearInterval(imageInterval)
    }, 3000)
    
}, [image])


    return(
        <section>
            <h1 id="about">Who is Aidan Meyer?</h1>
            <img src={require(`../../assets/images/coverPhotos/${image}.jpg`).default} className="my-2" style={{width: "100%"}} alt="cover" />
        </section>
    )
}

export default About;