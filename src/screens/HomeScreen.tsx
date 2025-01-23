import mzrf from './../img/banner_1.jpg'
import mzzk from './../img/mzzk.png'
import tfoms from './../img/tfoms.jpg'
import zms from './../img/logo-e1548227338555.png'
import gos from './../img/gos.gif'
import miac from './../img/guz_miac.jpg'

import Map from '../components/Map'
import Usefulitem from '../components/Usefulitem';

import NOK from '../components/NOK'

import Gosuslugi from '../components/Gosuslugi';
import National from '../components/National';
import ImageView from '../components/ImageView'
import photo from "../asset/image/ALjDyRGtIZQ.jpg"
import VideoPlayer from '../components/Videoplayer/VideoPlayer'
const HomeScreen = () => {





  return (

    <div className='home'>
      {/* <div className="photo_org_wrap">
        <img src={photo} alt="" />
      </div> */}

      <div className='mainline'>
      <div id="Video" className='color_lv_1-2'>
        <h4>Управление полисом ОМС</h4>
        <VideoPlayer src={"video.mp4"}/>
        </div>
        <div id="QR" className='color_lv_1-2'>
          <ImageView src={"QR_CODE.png"} />
        </div>

        <div id="QR2" className='color_lv_1-2'>
          <h4>Чтобы оценить условия предоставления услуг используйте QR-код или перейдите по ссылке ниже.</h4>
          <ImageView src={"QR_CODE2.jpg"} />
          <a href="https://bus.gov.ru/qrcode/rate/440387"> перейти на сайт </a>
        </div>

        <National />
        <Gosuslugi />
        <Map />

        <NOK />

      </div>





      <div className="useful">
        <div className=" name__src">
          <h3>Полезные ссылки</h3>
        </div>

        <div className="href">
          <Usefulitem
            src={mzrf}
            name={"Министерство здравохранения Российской Федерации"}
            url={"https://www.rosminzdrav.ru/"}
          />
          <Usefulitem
            src={mzzk}
            name={"Министерство здравоохранения Забайкальского края"}
            url={"https://www.chitazdrav.ru/"}
          />
          <Usefulitem
            src={zms}
            name={'Государственная страховая медицинская компания  "Забайкалмедстрах"'}
            url={"http://www.zms.chita.ru/"}
          />
          <Usefulitem
            src={tfoms}
            name={"Территориальный фонд обязательного медицинского страхования Забайкальского края"}
            url={"http://www.zabtfoms.ru/"}
          />

          <Usefulitem
            src={gos}
            name={"Портал государственных услуг"}
            url={"http://www.gosuslugi.ru/"}
          />

          <Usefulitem
            src={miac}
            name={'ГУЗ "Медицинский информационно-аналитический центр"'}
            url={"http://chitamiac.ru"}
          />
        </div>
      </div>
    </div>


  )
}

export default HomeScreen
