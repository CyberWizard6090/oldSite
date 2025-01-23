import React from 'react'
import {useParams} from 'react-router-dom';

const PdfScreen = () => {

  useParams();
  const {IDpdf} = useParams<Record<string, string | undefined>>()
  let a:string
  a = ".pdf"
  a = IDpdf + a

  


 
  
  return (
    <div className='pdfs'>
   
    <iframe src={  window.location.origin + "/pdf/" + IDpdf}  >

    </iframe>
    </div>
  )
}

export default PdfScreen