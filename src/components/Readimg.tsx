import React from 'react'
import Image from './Image'

const Readimg = (props:any) => {
  return (
    <div className='wrap-img'>
        <Image src={props.src}/>
    </div>
  )
}

export default Readimg