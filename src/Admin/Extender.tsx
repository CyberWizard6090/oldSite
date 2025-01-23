import React from 'react'
import { Outlet } from 'react-router-dom'
import Createcontent from './Createcontent'

const Extender = () => {
  return (
    <div className='Extender'>
   <Outlet />
      </div>
  )
}

export default Extender