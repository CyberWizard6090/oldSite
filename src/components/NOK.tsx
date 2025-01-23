import React from 'react'
import './../css/nok.css'
import nchk from './../img/download.png'
const NOK = () => {
  return (
    <div className='color_lv_1-2' id='NOK'>
      <div className="wrap_banner">
      <div className="img_banner">
       <img src={nchk} alt="" />
       </div>
       <div className="name_banner">
       НЕЗАВИСИМАЯ ОЦЕНКА КАЧЕСТВА УСЛОВИЙ ОКАЗАНИЯ УСЛУГ МЕДИЦИНСКИМИ ОРГАНИЗАЦИЯМИ
       </div>
       <div className="link_banner">
       <a target="_blank" href="https://anketa.minzdrav.gov.ru/ambulator/47ecb287-0529-4111-9ec3-74c06346f95f/44abcc06-c850-4804-b4f2-63e5963b898b">Оценить</a>
       </div>
      </div>
      
    </div>
  )
}

export default NOK
