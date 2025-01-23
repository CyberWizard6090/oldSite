import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { text } from 'stream/consumers';
const AddInfo = () => {

    function sending() {
        let elem_1: any = document.getElementById("infoid");
        let elem_2: any = document.getElementById("textinfo");
        let search = elem_1.value
        let text = elem_2.value
        fetch('/api/admin/info', {
            method: 'POST',
            body: JSON.stringify({
                search: search,
                text: text,

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
        <div>
            <form>
                <TextareaAutosize id='textinfo' placeholder='Введите текст' />
                <select name="" id="infoid">
                    <option value={"recommendations"}> Перечень рекомендованных обследований</option>
                    <option value={"working"}>режим работы </option>
                    <option value={"schedule"}>график приема </option>
                    <option value={"terms"}>о правилах и сроках </option>
                    <option value={"obligations"}>права и обязаности </option>
                    <option value={"regulations"}> о правилах записи</option>
                    <option value={"guarantees"}> программа госгарантей</option>
                    <option value={"documentation"}> Документация</option>
                    <option value={"licenses"}> лицензии</option>
                    <option value={"anticorruption"}> антикорупция</option>
                </select>
                <input type="button" value="отправить" onClick={sending} />
            </form>

        </div>
    )
}

export default AddInfo