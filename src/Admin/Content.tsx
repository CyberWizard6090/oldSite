import React from 'react'
import Extender from './Extender'
import Sidebar from './Sidebar'


export const Content = () => {

  const handleSubmit = () => {
      fetch('/api/singout', {
         method: 'POST',

         headers: {
            'Content-type': 'application/x-www-form-urlencoded',
         },

      })
         .then(r => r.json())
         .then((data) => {
           
         });





   };
  return (
    <div className='adminpanel'>
        <Sidebar/>
        <main>
            <form onSubmit={handleSubmit}><input type="submit" value="Выйти" id='exit-btn' /></form>
        
        <Extender/>
        </main>
      
    </div>
  )
}
