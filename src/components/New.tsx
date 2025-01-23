import React from 'react'
import PropTypes from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';

const New = (
  props: any
) => {







  return (
    <div className="news_item color_lv_1-2">
      <h2>{props.title}</h2>
      <div className="con">

        <div className="img_new_wrap">
          <Image src={props.src} />
         
        </div>


        <p>{props.text}</p>


      </div>
      <div className="write_bar">
        <p>{props.date}</p>
        {/* let a =  {props.url} */}
        <Link to={props.url}>

          <div className='color_lv_2-1 btn_read btn-s' id={props.id}>

            {props.nbut}

          </div>
        </Link>

      </div>

    </div>
  )
}
export default New