import Pdf from '../components/Pdf'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../css/infoScreen.css'

const InfoScreen = () => {
    const history = useNavigate()

    const [posts, setPosts] = useState([]);
    let doc: string;
    let locwin = window.location.pathname;
    if ("/specialists" === locwin) {
      //перечень рекомендованных обследований
      doc = "recommendations"
    }
    if ("/working-mode" === locwin) {
      //режим работы
      doc = "working"
    }
    if ("/admission" === locwin) {
      //график приема
      doc = "schedule"
    }
    if ("/terms" === locwin) {
      // о правилах и сроках
      doc = "terms"
    }
    if ("/obligations" === locwin) {
      //права и обязаности
      doc = "obligations"
    }
    if ("/regulations" === locwin) {
  
      //о правилах записи
      doc = "regulations"
    }
    if ("/guarantees" === locwin) {
      //программа госгарантей
      doc = "guarantees"
    }
  
    if ("/licenses" === locwin) {
      //программа госгарантей
      doc = "licenses"
    }
    if ("/documentation" === locwin) {
      //программа госгарантей
      doc = "documentation"
    }
    if ("/anticorruption" === locwin) {
      //программа госгарантей
      doc = "anticorruption"
    }
    useEffect(() => {
        fetch('/api/info/' + doc)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      }, [history])
  return (
    <div className=' text-info '>
{posts.map((item:any ) => (
    <pre className='color_lv_1-2'>
          {item.text}
    </pre>

   
         
        
      ))}
    </div>

  )
}

export default InfoScreen