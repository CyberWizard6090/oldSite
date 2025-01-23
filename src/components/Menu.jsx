
import './../css/menu.css';
import ItemMenu from './ItemMenu';
import Dropdown from './Dropdown';
import BTVisually from './BTVisually';
import { LogoView } from './LogoView';
import { useState, useEffect } from 'react';
const Menu = () => {
  const [active, setActive] = useState(false);

  const BtnMenu = (props) => {
    if (document.documentElement.clientWidth <= 1199) {
      if (props.active) {
        disableScroll();
        return (
          <div className="btnmenu" onClick={on_off}>
            <svg width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg>
          </div>
        )
      } else {
        enableScroll();
        return (
          <div className="btnmenu" onClick={on_off}>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        )
      }
    }
  }
  function disableScroll() {
    const app = document.querySelector("app")
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    const app = document.querySelector("app")
    document.body.style.overflow = "scroll"
  }
  const handleResize = () => {
    if (document.documentElement.clientWidth <= 1199) { setActive(false); }
    else { setActive(true); }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const View = (props) => {
    if (document.documentElement.clientWidth >= 1200) {
      return <Menu />
    } else if (props.active) {
      return <Menu />
    }
  }

  const Menu = () => {

    return (
      <div className="menu_wrap" >

        <ItemMenu
          onclick={on_off}
          url={"/"}
          nitem={"Главная"}
        />

        <ItemMenu
          onclick={on_off}
          url={"/contact"}
          nitem={"Контактная информация"}
        />

        <ItemMenu
          onclick={on_off}
          url={"/Prevention"}
          nitem={"Профилактика"}
        />

        <ItemMenu
          onclick={on_off}
          url={"/News"}
          nitem={"Новости"}
        />

        <Dropdown
          onclick={on_off}
          id={"aaa"}
          nitem={"Услуги"}
          list={[
            "Платные услуги",
            "Бесплатные услуги",
            "Платные не медицинские услуги услуги",
          ]}
          lurl={[
            "/attendance/pay",
            "/attendance/free",
            "/attendance/non-medical",
          ]}
        />

        <ItemMenu

          onclick={on_off}
          url={"/vacancies"}
          nitem={"Вакансии"}
        />

        <Dropdown
          onclick={on_off}
          id={"sss"}
          nitem={"Для специалистов"}
          list={[
            "Информация по годовому отчету",
            "Перечень рекомендованых обследований по профилю онкология",
          ]}
          lurl={[
            "/specialists/report",
            "/specialists",
          ]}

        />

        <Dropdown
          onclick={on_off}
          id={"ppp"}
          nitem={"Для пациентов"}
          list={[
            "Режим работы",
            "График приема граждан руководителем медицинской организации, Заместителем главного врача ",
            "О правилах и сроках госпитализации",
            "Права и обязаности граждан в сфере охраны труда",
            "О правилах записи на первичный прием/ консультацию",
            "Право на внеочередное оказание медицинской помощи",

          ]}
          lurl={[
            "/working-mode",
            "/admission",
            "/terms",
            "/obligations",
            "/regulations",
            "/extraordinary",
          ]}
        />

        <Dropdown
          onclick={on_off}
          id={"zss"}
          nitem={"Структура организации"}
          iitem={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"> <path d="M19,6H14.321A3.95,3.95,0,0,0,13,5.388V5l3.53-1.652a1,1,0,0,0,0-1.7l-3.2-1.5A1.637,1.637,0,0,0,11,1.636V5.388A3.937,3.937,0,0,0,9.68,6H5a5.006,5.006,0,0,0-5,5V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11A5.006,5.006,0,0,0,19,6Zm2.816,4H19.657a3.017,3.017,0,0,1-2.121-.879L16.414,8H19A3,3,0,0,1,21.816,10ZM5,8H7.586L6.464,9.121A3.017,3.017,0,0,1,4.343,10H2.184A3,3,0,0,1,5,8Zm8,14H11V19a1,1,0,0,1,2,0Zm8,0H15V19a3,3,0,0,0-6,0v3H3a1,1,0,0,1-1-1V12H4.343a4.968,4.968,0,0,0,3.535-1.465l2.708-2.707a2,2,0,0,1,2.828,0l2.708,2.707A4.968,4.968,0,0,0,19.657,12H22v9A1,1,0,0,1,21,22ZM7,15a1,1,0,0,1-1,1H5a1,1,0,0,1,0-2H6A1,1,0,0,1,7,15Zm0,4a1,1,0,0,1-1,1H5a1,1,0,0,1,0-2H6A1,1,0,0,1,7,19Zm13-4a1,1,0,0,1-1,1H18a1,1,0,0,1,0-2h1A1,1,0,0,1,20,15Zm0,4a1,1,0,0,1-1,1H18a1,1,0,0,1,0-2h1A1,1,0,0,1,20,19Zm-6-7a2,2,0,1,1-2-2A2,2,0,0,1,14,12Z" /></svg>}
          list={[
            "Администрация",
            "Поликлиника",
            "Отделения стационара",
          ]}
          lurl={[
            "structure/administration/adm",
            "structure/polyclinic",
            "structure/separation",
          ]}
        />
        {/* <ItemMenu

        url={"/reviews"}
        nitem={"Отзывы потребителей услуг"}
        iitem={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" >
          <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" /><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" /></svg>}

      /> */}


        <ItemMenu
          onclick={on_off}
          url={"/guarantees"}
          nitem={"Программа госгарантий"}
        />

        <ItemMenu
          onclick={on_off}
          url={"/licenses"}
          nitem={"Лицензии"}
        />

        <ItemMenu
          onclick={on_off}
          url={"/documents"}
          nitem={"Документы"}
        />

        <ItemMenu
          onclick={on_off}
          url={"/anticorruption"}
          nitem={"Антикорупция"}
        />
        <Dropdown
          onclick={on_off}
          id={"nsb"}
          nitem={"Aнтитеррористическая безопасность"}
          list={[
            "Видеоматериалы",
            "Материалы",
          ]}
          lurl={[
            "antiterror/video",
            "antiterror/material",

          ]}
        />
        <ItemMenu
          onclick={on_off}
          url={"/About"}
          nitem={"Сведения о медицинской организации"}
        />
      </div>
    )
  }

  function on_off() {
    if (active) { setActive(false); }
    else { setActive(true); }
  }

  return (
    <div id='menu' className="Menu   menubox" >
      <div className="menu__block color_lv_1-1">
      <BtnMenu active={active} />
      <div className="logo__wrap ">
        <LogoView />
      </div>
      <View active={active} />
      <BTVisually />
      </div>
     
    </div>
  )
}

export default Menu
