import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
const Cutaway = (props:any) => {
  let url:string = document.location.pathname
  return (
    <Link to={url+ "/" + props.url}>
    <div className='wrap-med'>
       
    <div className="card-med color_lv_1-2">
    <Avatar src={props.img}/>
      <div className="top-bar">
        <p>{props.name}</p>
        <p className='dol'>Должность: {props.post}</p>
      </div>
    </div>
  </div>
  </Link>
  )
}

export default Cutaway