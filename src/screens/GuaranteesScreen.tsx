
import Pdf from '../components/Pdf'
import React, {useEffect, useState} from 'react';

const GuaranteesScreen = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('api/documents/' + 'guarantees')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
  
  
   
    return (
      <div className='Specialists color_lv_1-2'>
  
  {posts.map((item:any ) => (
          <Pdf 
          name={item.name}
          src={item.resource}
          />
        ))}
       
  
      </div>
    )
}

export default GuaranteesScreen