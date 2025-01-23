import React from 'react'

const Map = () => {
  return (
    <div id='map' className=' color_lv_1-2'>
<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a4154ddb4e0f692139ade4cd0c3e3ccc68d5b301858f5d75122913aa6c09ec2&amp;source=constructor" width="100%" height="630" ></iframe>
   <div className="legend">
   <p>Забайкальский край, Г. Чита, улица Ленинградская, д 104</p>
   <hr/>
   <p>Добраться можно </p>  
   <div><p>Маршрутными такси:</p>  <span> 42</span></div>
   <p>До остановки "Онкодиспансер"</p>
   <p>или</p>
   <div><p>Маршрутными такси:</p>  <span> 51</span> <span>58</span></div>
   <div> <p>Троллейбусом:</p>  <span>2</span></div>
   <div><p>Автобусом:</p>  <span>30</span></div>
   <p>До остановки "Краевая детская клиническая больница"</p>
   <hr/>
  
   
   
   </div>
  
    </div>
  )
}

export default Map