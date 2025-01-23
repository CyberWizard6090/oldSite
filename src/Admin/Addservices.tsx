import React from 'react'
import { Addimgs } from './Addimg'
import './services.css'

const Addservices = () => {
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
    function sending() {
      
        let meaning = [];
        let elem: any = document.getElementById("imgadd_ser");
       
        let files = elem.files
     
        for (var i = 0; i < files.length; i++) {
            meaning.push(files[i].name);
        }
        let ar: string = 'pay';

        let input1: any = document.getElementById('radio-1') as HTMLInputElement | null;
        let input2: any = document.getElementById('radio-2') as HTMLInputElement | null;
        let input3: any = document.getElementById('radio-3') as HTMLInputElement | null;
        if (input1.checked) {
           ar = 'pay'
        }
        if (input2.checked) {
           ar = 'free'
        }
        if (input3.checked) {
            ar = 'non-medical'
         }
        

  

        fetch('/api/admin/services', {
            method: 'POST',
            body: JSON.stringify({
                type: ar,
                image: meaning,

            }),
            headers: {
                'Content-type': 'multipart/form-data',
            },
        })
            .then(r => r.json())
            .then((data) => {
                console.log(data);
            });
        multiFile("photo", "imgadd_ser")
    }
    return (
        <div>
            <form >
                <Addimgs id="add_ser" />
                <div className="bottom__panel">
                    <div className="form_radio_group">

                        <div className="form_radio_group-item">
                            <input id="radio-1" type="radio" name="radio" value="1" checked />
                            <label htmlFor="radio-1">Платные</label>
                        </div>

                        <div className="form_radio_group-item">
                            <input id="radio-2" type="radio" name="radio" value="2" />
                            <label htmlFor="radio-2">Бесплатные</label>
                        </div>

                        <div className="form_radio_group-item">
                            <input id="radio-3" type="radio" name="radio" value="4" />
                            <label htmlFor="radio-3">Не медицинские услуги</label>
                        </div>

                    </div>
                    <input type="button" value="Опубликовать" onClick={sending} />
                </div>

            </form>
        </div>
    )
}

export default Addservices