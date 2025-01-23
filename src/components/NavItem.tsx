import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props:any) => {
  return (  
  <Link to={props.url}> 
    <div className="NavItem color_lv_1-3 btn-s">
    <div className="navIcon">
      {props.iitem}

    </div>
    <div className="navNameItem">
      {props.nitem}
    </div>
        
    </div>
 
  </Link>
 
  )
}

export default NavItem