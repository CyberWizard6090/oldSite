import React from 'react'
import add from './../img/icon/add.svg'
export const Cover = () => {
  function showPreview(e:any){
    if(e.target.files.length > 0){
      var src = URL.createObjectURL(e.target.files[0]);
      var preview:any = document.getElementById("file-ip-1-preview");
      preview!.src = src;
      preview!.style.display = "block";
    }
  }
  return (
    <div className="center">
      <div className="form-input">
        <div className="preview">
          <img id="file-ip-1-preview"/>
        </div>
     
 <label htmlFor="file-ip-1">Загрузить обложку</label>
 <input type="file" id="file-ip-1" className='sending__files' accept="image/*" onChange={showPreview} />

      </div>
    </div>
  )
}

export const Addimg = (props: any) => {

  function img(e: any) {

    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const files = e.target.files;
      const output = document.getElementById("out" + props.id);
      output!.innerHTML = "";
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match("image")) continue;
        const imgReader = new FileReader();
        imgReader.addEventListener("load", function (event) {
          const imgFile = event.target;
          const img = document.createElement("img");
          img.className = "thumbnail"
          img.src = String(imgFile!.result);
          output!.appendChild(img);
        });
        imgReader.readAsDataURL(files[i]);
      }
    } else {
      alert("Your browser does not support File API");
    }

  }
  return (
    <>

      <div draggable="true" className="input__wrapper itemlist" >
        < output  id={"out" + props.id}/>
        < input name="4" type="file" id={"img" + props.id} className="sending__files input input__file data__content" onChange={img} accept="image/jpeg, image/png, image/jpg" />
        <label htmlFor={"img" + props.id} className="input__file-button">
          <span className="input__file-icon-wrapper"><img className=" input__file-icon" src={add} alt="Выбрать изображения" width="25" /></span>
          <span className="input__file-button-text">Выберите изображения</span>
        </label>
      </div>


    </>
  )
}
export const Addimgs = (props: any) => {

  function img(e: any) {

    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const files = e.target.files;
      const output = document.getElementById("out" + props.id);
      output!.innerHTML = "";
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match("image")) continue;
        const imgReader = new FileReader();
        imgReader.addEventListener("load", function (event) {
          const imgFile = event.target;
          const img = document.createElement("img");
          img.className = "thumbnail"
          img.src = String(imgFile!.result);
          output!.appendChild(img);
        });
        imgReader.readAsDataURL(files[i]);
      }
    } else {
      alert("Your browser does not support File API");
    }

  }
  return (
    <>

      <div draggable="true" className="input__wrapper itemlist" >
        < output  id={"out" + props.id}/>
        < input name="8" type="file" id={"img" + props.id} className="sending__files input input__file data__content" onChange={img} multiple accept="image/jpeg, image/png, image/jpg" />
        <label htmlFor={"img" + props.id} className="input__file-button">
          <span className="input__file-icon-wrapper"><img className=" input__file-icon" src={add} alt="Выбрать изображения" width="25" /></span>
          <span className="input__file-button-text">Выберите изображения</span>
        </label>
      </div>


    </>
  )
}

