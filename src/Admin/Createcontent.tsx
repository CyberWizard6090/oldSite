
import React, { useState } from 'react';
import { Addimg, Addimgs, Cover } from './Addimg';
import { Addpdf } from './Addpdf';
import { Addhead, Addsub, Addtext } from './Addtext';
const Createcontent = () => {

   const [arr, setArr] = useState(["2"]);
   const [value, setValue] = useState('');


   const result = arr.map((element, index) => {
      switch (element) {
         case "1": return <Addhead id={index} />;
         case "2": return <Addsub id={index} />;
         case "3": return <Addtext id={index} />
         case "4": return <Addimg id={index} />
         case "5": return <Addpdf id={index} />
         case "8": return <Addimgs id={index} />
      }
   });
   function sending(intem: any) {
      let ar: string = '/api/admin/newnews';

      let input1: any = document.getElementById('radio-1') as HTMLInputElement | null;
      let input2: any = document.getElementById('radio-2') as HTMLInputElement | null;
      if (input1.checked) {
         ar = '/api/admin/newnews'
      }
      if (input2.checked) {
         ar = '/api/admin/newprevention'
      }



      fetch(ar, {
         method: 'POST',
         body: JSON.stringify({
            title: intem.title,
            image: intem.image,
            text: intem.text,
            date: intem.date,
            content: intem.content,
         }),
         headers: {
            'Content-type': 'multipart/form-data',
         },
      })
         .then(r => r.json())
         .then((data) => {
            console.log(data);
         });

   }
   function oneFile(name: string, search: string) {

      const formData = new FormData();
      let task: any = document.getElementById(search);

      const data_set = task;

      formData.append(name, data_set.files[0]);


      fetch('/api/admin/upload', {
         method: 'PUT',
         body: formData,
      })
         .then((response) => response.json())
         .then((result) => {
            console.log('Success:', result);
         })
         .catch((error) => {
            console.error('Error:', error);
         })

   }
   function multiFile(name: string, search: string) {

      const formData = new FormData();
      let task: any = document.getElementById(search);

      const data_set = task;


      for (let i = 0; i < data_set.files.length; i++) {
         formData.append(name, data_set.files[i]);
      }

      fetch('/api/admin/upload', {
         method: 'POST',
         body: formData,

      })
         .then((response) => response.json())
         .then((result) => {
            console.log('Success:', result);
         })
         .catch((error) => {
            console.error('Error:', error);
         })

   }
   interface information {

      type: string;
      content: any;

   }
   interface push__data {

      title: string;
      image?: string;
      text?: string;
      date: string;
      content: any[];

   };
   function get_data() {

      let key: string;
      const search: any = document.getElementById('block_list');
      let meaning = [];
      let info: information;
      const elements = search.querySelectorAll('.data__content');
      let arr = new Array()

      oneFile("cover", 'file-ip-1')

      for (let elem of elements) {
         key = elem.getAttribute("name");
         if (key === "8") {
            let is: any = elem.id;
            multiFile("photo", is)
            let files = elem.files
            for (var i = 0; i < files.length; i++) {
               meaning.push(files[i].name);
            }

         }
         if (key === "5") {
            let is: any = elem.id;
            oneFile("pdf", is)
            let files = elem.files
            meaning.push(files[0].name);

         }
         if (key === "4") {
            let is: any = elem.id;
            oneFile("photo", is)
            let files = elem.files
            meaning.push(files[0].name);
         }

         else {
            meaning.push(elem.value)
         }

         info = {
            type: key,
            content: meaning,
         };
         console.log(info)
         arr.push(info)
         meaning = [];


      }

      let now = new Date().toLocaleDateString();
      let elem__t: any = document.getElementById('ti')
      let elem__im: any = document.getElementById('file-ip-1')
      let elem__tt: any = document.getElementById('tt')

      let t = elem__t!.value;
      //  Возникает ошибка  
      let im = elem__im.files[0].name;
      //  Возникает ошибка
      let tt = elem__tt!.value;


      let data: push__data = {
         title: t,
         image: im,
         text: tt,
         date: now,
         content: arr,
      }

      sending(data);
   }

   return (
      <form name="my">
         <div className='Createcontent '>
            <div id="block_list">
               <hr />
               <h1>Превью</h1>
               <hr />
               <div className="preview__n">
                  <Cover />
                  <input type="text" id='ti' className='preview__header' required />
                  <textarea id='tt' className='preview__text' name=""  > </textarea>
               </div>
               <hr />
               <h1>Содержание</h1>
               <hr />
               {result}
            </div>
            <div className="bottompanel">

               <select value={value} onChange={event => setValue(event.target.value)}  >

                  <option>Выберите Элемент</option>
                  <option value="1">Заголовок</option>
                  <option value="2">Подзаголовок</option>
                  <option value="3">Текс</option>
                  <option value="4">Изображение</option>
                  <option value="5">PDF</option>
                  <option value="8">Изображения</option>

               </select>

               <input type="button" value="Добавить поле" onClick={event => setArr([...arr, value])} />
               <div className="form_radio_group">
                  
                  <div className="form_radio_group-item">
                     <input className='radio_news' id="radio-1" type="radio" name="radio" value="1" checked />
                     <label htmlFor="radio-1">Новости</label>
                  </div>

                  <div className="form_radio_group-item">
                     <input className='radio_news' id="radio-2" type="radio" name="radio" value="4" />
                     <label htmlFor="radio-2">Профилактика</label>
                  </div>

               </div>

               <input type="button" value={"Отправить"} onClick={get_data} />

            </div>
         </div>
      </form>
   );

}
export default Createcontent;