import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../components/List';
import Pdf from '../components/Pdf';
import Rubric from '../components/Rubric';
import Sound from '../components/Sound';
import Subtitle from '../components/Subtitle';
import Table from '../components/Table';
import Text from '../components/Text';
import Readimg from '../components/Readimg';
import Gallery from '../components/Gallery';

const NewScreen = () => {
  const [posts, setPosts] = useState([]);

  const { IDnews } = useParams()


  var win = window.location.pathname

  useEffect(() => {
    fetch('/api/readnews/' + IDnews)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);




  const listarticle = posts.map((item: any) => {

    switch (item.type) {
      case "1": return <Rubric text={item.content} />;
      case "2": return <Subtitle text={item.content} />
      case "3": return <Text text={item.content} />
      case "4": return <Readimg src={item.content} />
      case "5": return <Pdf src={item.content} />
      case "6": return <List />
      case "7": return <Table />
      case "8": return <Gallery src={window.location.origin + "/pictures/"} arr={item.content} />
    }



  })


  return (
    <div className="read ">
      <div className='wrap-read font-read color_lv_1-2'>
        {/* {win}
      {IDnews} */}
        {listarticle}


      </div>

    </div>
  )
}

export default NewScreen