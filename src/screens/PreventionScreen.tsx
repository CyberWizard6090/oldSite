import React, {useEffect, useState} from 'react';
import './../css/news.css';
import  './../css/grid-blocks.css';
import New from '../components/New';

import Box from '@mui/material/Box';

import Masonry from '@mui/lab/Masonry';

const PreventionScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/prevention')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
 const [size, setSize] = useState([0, 0]);
 useEffect(() => {
   function updateSize() {
     setSize([window.innerWidth, window.innerHeight]);
   }
   window.addEventListener('resize', updateSize);
   updateSize();
   return () => window.removeEventListener('resize', updateSize);
 }, []);
 let a = window.innerWidth - 20
let b:number
b = 3
 if (a < 1000){
   b = 2
 }
 if (a < 500){
   b = 1
 }

  return (
    <div className="grid_block_preventive">
         <Box sx={{ width: a, minHeight: 393 }}>
      <Masonry columns={b} spacing={3}>
      {posts.map((item:any ) => (
            <New 
          
            date={item.date}
            title={item.title}
            nbut={"Узнать больше"} 
            text={item.text}
            src={ item.image}
            url={"/readprevention/" + item.id}
            />
      ))}

<New 
          
          date={"111"}
          title={"Тест"}
          nbut={"Узнать больше"} 
          text={"lorem "}
          src={"."}
          url={"/readprevention/" + "item.id"}
          />

      </Masonry>
    </Box>
       

</div>
  )
}

export default PreventionScreen