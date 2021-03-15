import React from 'react';

function Canvas(props) {
return (
    <img 
    src={require(`../../assets/images/coverPhotos/${props}.jpg`).default} 
    className="my-2" 
    style={{width: "50%", margin: "0, 2000px, 0, 2000px"}} 
    alt="cover" 
    />
)
}

export default Canvas