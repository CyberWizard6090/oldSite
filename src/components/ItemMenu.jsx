import React from 'react'
import {
  Link,

} from 'react-router-dom';

const ItemMenu = (
  props
) => {
  

 
  return (
    <Link to={props.url}   >
      <div className=" item__menu__style color_lv_1-3 actdis" onClick={props.onclick}>
        <div className="menu_item">
          

          <div className="name_item">
            {props.nitem}
          </div>
        </div>
      </div>

    </Link>
  )
}

export default ItemMenu