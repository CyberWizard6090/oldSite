import React from 'react'
import ItemMenu from '../components/ItemMenu'

const Sidebar = () => {
  
  return (
    <div className='sidebar'>
       <ItemMenu
       nitem={"Добавить новость| профилактику"}
       url={"/super/createnews"}
       />
         <ItemMenu
       nitem={"PDF"}
       url={"/super/editorpdf"}
       />
         <ItemMenu
       nitem={"Отделение и персонал"}
       url={"/super/separation"}
       />
           <ItemMenu
       nitem={"Услуги"}
       url={"/super/services"}
       />

<ItemMenu
       nitem={"Вакансии"}
       url={"/super/vacancy"}
       />
            <ItemMenu
       nitem={"Информация"}
       url={"/super/info"}
       />
      
    </div>
  )
}

export default Sidebar