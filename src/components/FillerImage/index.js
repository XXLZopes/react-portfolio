import React from 'react';


function fillerImage({ currentProjects }) {
let isFillerImage = false;
if (!currentProjects.length % 2 && !isFillerImage) {
    isFillerImage = 
    <img 
        width="60%"
        className="pl-img">
        
    </img>
} else {
    isFillerImage = <img display="none"></img>
}

return (
    {fillerImage}
)
}
export default fillerImage