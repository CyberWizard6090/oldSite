import React from 'react'
import PropTypes  from 'react';
import avt from "./../img/User.png";

const Avatar = ({
    src, alt
}:any) => {

            return (
                <img
                 src = {src}
                 alt = {alt}
            
                 
                />
               )
    
}

Avatar.defaultProps ={
    src: avt,
    alt: 'avatar',
 

}

export default Avatar