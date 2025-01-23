
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../components/Image'
import OpenDoc from '../components/OpenDoc/OpenDoc';


const AttendanceScreen = () => {
  const [posts, setPosts] = useState([]);
  let loc = window.location.pathname;
  const history = useNavigate();
  let doc = ""
  if (loc === '/attendance/free') {
    doc = "free"
  }
  if (loc === '/attendance/pay') {
    doc = "pay";
  }
  if (loc === '/attendance/non-medical') {
    doc = "non-medical";
  }
  const SERvies:any =() =>{
    if (loc === '/attendance/pay') {
    return(
      <>

      <OpenDoc NameDoc={"Прил. 1 Форма договора на оказание плат. услуг гражданину"} Doc={"1rwerwerwerfwer.docx"} />
      <OpenDoc NameDoc={"17 Прил. 1 Полож. об информиров.  пациента при получ. плат. услуг в мед. орг."} Doc={"2fsdfsdfsdfsd.rtf"} />
      <OpenDoc NameDoc={"05 Прил. 1 Правила предост. плат. мед услуг в МО (инф для пациента)"} Doc={"3ytryrtyrtncnn.rtf"} />
      <OpenDoc NameDoc={"02 Прил. 1 Полож о порядке и условиях предоставления платных мед услуг"} Doc={"4hfghfghfghfghh.rtf"} />
      </>
    )
    }
    else if(loc === '/attendance/non-medical'){
      return   <OpenDoc NameDoc={"08 Прил. 1 Полож. о порядке оказания платных немед. услуг"} Doc={"rteyrtyurtyrtyrty.rtf"} />
    }
  }

  useEffect(() => {

    fetch('/api/services/' + doc)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
    
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [history])

  return (
    <div className='base-grid color_lv_1-2'>
      <SERvies/>
      {posts.map((item: string) => (<Image src={item} />))}

    </div>

  )
}

export default AttendanceScreen


