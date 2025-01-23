import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Cutaway from '../components/Cutaway'
import './../css/personnel.css'

const Personnel = () => {
  const [info, setInfo] = useState([]);
  let loc = window.location.pathname;
  const history = useNavigate();
  const { branch } = useParams()
  useEffect(() => {
  
    
    fetch('/api/personal/' + branch)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [history])
    console.log(info);
  return (
    <div>
        <div className="personnel__items_wrap">
       <div className="wrap__per">
       {info.map((item: any) => (
         <Cutaway url={item.id} name={item.surname + " " + item.name + " " + item.patronymic} post={item.post} />
      ))}
     
  
       </div>
        </div>
         
     
    </div>
  )
}

export default Personnel