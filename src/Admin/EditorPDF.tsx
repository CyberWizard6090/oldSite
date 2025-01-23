import './pdf.css'

const EditorPDF = () => {
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
  let elem_search: any = document.getElementById("tag"); 
  let elem_resource: any = document.getElementById("file_pdf");
  let elem_name: any = document.getElementById("name_pdf");
  let search = elem_search.value
  let resource = elem_resource.files[0].name
  let name = elem_name.value
  fetch('/api/admin/documents', {
    method: 'POST',
    body: JSON.stringify({
      search: search,
resource: resource,
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
    multiFile("pdf","file_pdf")
}
  return (
    <div className='EditorPDF'>
      <form className='form_pdf'>
        <select name="" id="tag">
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
 <option value={"extraordinary"}> Вне очереди</option>
 <option value={"correction-plan"}> План испраления</option>

        </select>
        <input id='name_pdf' type="text" placeholder='Имя pdf файла'/>
        <input id='file_pdf' type="file" />
        <input type="button" value={"Отправить"} onClick={sending} />
      </form>
    </div>
  )
}

export default EditorPDF
