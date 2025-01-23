
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
import ImageView from '../components/ImageView';


const ReadScreen = () => {

  const [posts, setPosts] = useState([]);


  const { ID } = useParams()
  let link: string;
  var win = window.location.pathname

  if (window.location.origin + "/readprevention/" + ID == window.location.href) {
    link = "/readprevention/"

  }
  if (window.location.origin + "/readnews/" + ID == window.location.href) {
    link = "/readnews/"
  }

  useEffect(() => {
    fetch('/api'+ link + ID)
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
      case "4": return <ImageView src={item.content}  />
      case "5": return <Pdf src={window.location.origin + item.content} />
      case "6": return <List />
      case "7": return <Table />
      case "8": return <Gallery arr={item.content} />
    }


  })

  return (
    <div className="read__screen">
      <div className='read__content'>
   
        {listarticle}
  

      </div>

    </div>
  )
}

export default ReadScreen
