import { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './personal.css'

const Personal = () => {
    const [branch, setBranch] = useState([]);
    function departmentF() {

        let elem: any = document.getElementById('department')
        let name: string = elem.value;
        if (name === "Поликлиника") {
            name = "pol"
        }
        if (name === "Стационар") {
            name = "hos"
        }
        if (name === "Администрация") {
            name = "adm"
         }
        fetch('/api/branches/' + name)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBranch(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

    }
    useEffect(() => { }, [])

    const res = branch.map((item: any) => {
        return <option value={item.idbranch}>{item.name}</option>
    })

    function addcontact() {
        let elem_name: any = document.getElementById('face')
        let elem_number: any = document.getElementById('number')

        let name: string = elem_name.value;
        let number: string = elem_number.value;

        fetch("/api/admin/newcontact", {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                number: number
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

    function addpersonal() {

        let elem_surname: any = document.getElementById('surname');
        let elem_name: any = document.getElementById('name');
        let elem_patronymic: any = document.getElementById('patronymic');
        let elem_department: any = document.getElementById('department');
        let elem_cabinet: any = document.getElementById('cabinet');
        let elem_post: any = document.getElementById('p');
        let elem_education: any = document.getElementById('edu');
        let elem_certificate: any = document.getElementById('certificate');
        let elem_qualification: any = document.getElementById('qualification');

        let surname = elem_surname.value;
        let name = elem_name.value;
        let patronymic = elem_patronymic.value;
        let department = elem_department.value;
        let cabinet = elem_cabinet.value;
        let post = elem_post.value;
        let education = elem_education.value;
        let certificate = elem_certificate.value;
        let qualification = elem_qualification.value;

        fetch("/api/admin/newpersonal", {
            method: 'POST',
            body: JSON.stringify({
                surname: surname,
                name: name,
                patronymic: patronymic,
                department: department,
                cabinet: cabinet,
                post: post,
                education: education,
                certificate: certificate,
                qualification: qualification,
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
    function pass_gen(len: number) {
        const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
        var str = '';
        for (var i = 0; i < len; i++) {
            var pos = Math.floor(Math.random() * chrs.length);
            str += chrs.substring(pos, pos + 1);
        }
        return str;
    }
    function addbranches() {
        let elem_branch: any = document.getElementById('addbran')
        let elem_name: any = document.getElementById('addkab')
        let name: string = elem_name.value;
        let branch: string = elem_branch.value;
        let idbranch = pass_gen(10)
        fetch("/api/admin/newbranch", {
            method: 'POST',
            body: JSON.stringify({
                branch: branch,
                idbranch: idbranch,
                name: name,
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

    return (
        <div className='personal'>
            <div className="form__per color_lv_1-2">
                <h2>Контакты</h2>
                <form>
                    <input type="text" id='face' placeholder='Контактное лицо' />
                    <input type="text" id='number' placeholder='Номер' />
                    <input type="button" onClick={addcontact} value="Отправить" />
                </form>
            </div>

            <div className="form__per color_lv_1-2">
                <h2>Сотрудник</h2>
                <form onSubmit={addpersonal}>
                    <input id='surname' type="text" placeholder='Фамилия' />
                    <input id='name' type="text" placeholder='Имя' />
                    <input id='patronymic' type="text" placeholder='Отчество' />
                    <select name="" id="department" onChange={departmentF}>
                        <option value="Поликлиника">Поликлиника</option>
                        <option value="Стационар">Стационар</option>
                        <option value="Администрация">Администрация</option>
                    </select>
                    <select name="" id="cabinet" >
                        {res}
                    </select>
                    <input id='p' type="text" placeholder='Должность' />
                    <TextareaAutosize id='edu' placeholder='Образование' />
                    <TextareaAutosize id='certificate' placeholder='Сертификат' />
                    <TextareaAutosize id='qualification' placeholder='Квалификация' />
                    <input type="button" onClick={addpersonal} value="Отправить" />
                </form>
            </div>

            <div className="form__per color_lv_1-2">
                <h2>Отделения</h2>
                <form>
                    <select name="" id="addbran" >
                        <option value="pol">Поликлиника</option>
                        <option value="hos">Стационар</option>
                        <option value="adm">Администрация</option>
                    </select>
                    <input type="text" id='addkab' placeholder='отделение или этаж и кабинет' />
                    <input type="button" onClick={addbranches} value="Отправить" />
                </form>
            </div>
        </div>
    )
}

export default Personal