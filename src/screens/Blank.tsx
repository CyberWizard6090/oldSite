import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Avatar from '../components/Avatar'
import './../css/blank.css'
const Blank = () => {
  const [posts, setPosts] = useState([]);

  const { IDperson } = useParams()


  var win = window.location.pathname

  useEffect(() => {
    fetch('/api/person/' + IDperson)
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
    <>
   
    {posts.map((item: any) => (
      
    <div className='wrap__blank'>
      <div className="blank">
        <div className="avatar__per color_lv_1-2">
          <Avatar />
        </div>
        <div className="info__per color_lv_1-2">
          <div className="name_per" >
            <h1>
              {item.surname + " " + item.name + " " + item.patronymic}
            </h1>
          </div>
          <div className="post__per">
            <h2> Должность:</h2>
            <p>
              {item.post}
            </p>

          </div>
          <div className="education__per">
            <h2> Образование:</h2>
            <p>
              {item.education}
            </p>
          </div>
          <div className="certificate__per">
            <h2> Сертификат:</h2>
            <p>
              {item.certificate}
            </p>
          </div>
          <div className="qualification__per">
            <h2> Квалификация:</h2>
            <p>
              {item.qualification}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
    </>
  )
}

export default Blank