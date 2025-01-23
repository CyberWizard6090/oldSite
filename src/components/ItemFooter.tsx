import React from 'react'
import Image from './Image'

const ItemFooter = (
    props: any
) => {
  return (
   

<a href={props.url}>
<div className="SocialItem">
    <div className="imgSize">
        <Image src={props.img} alt={"X"}/>
    </div>

    <div className="NameFooterItem">
            {props.name}
    </div>
</div>

</a>
       
                
        
   
  )
}

export default ItemFooter