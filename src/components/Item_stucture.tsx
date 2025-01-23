import React from 'react'

import { Link } from 'react-router-dom'

const Item_stucture = (props:any) => {
    let url:string = document.location.pathname
  return (
    <Link to={url+"/" + props.url}>
    <div className='Item_stucture color_lv_2-2 '><p>
      {props.name}
        </p> </div>
        </Link>
  )
}

export default Item_stucture