import React from 'react';
import PropTypes  from 'react';


const Image = ({
    src, alt
}) => {

   
    if (src == "http://www.z-kod.ru"){
return(
    <hr/>
)
    }
    else{
        return (
            <img
             src = {window.location.origin + "/pictures/" + src}
             alt = {alt}
        
             
            />
           )

    }

  
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,

}
Image.defaultProps ={
    src: "./pictures/default.jpg",
    alt: '',
 

}

export default Image