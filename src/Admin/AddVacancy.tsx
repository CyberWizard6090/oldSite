import React from 'react'

const AddVacancy = () => {
    function sending() {
        let elem1: any = document.getElementById('vac')
        let elem2: any = document.getElementById('vac1')
        let elem3: any = document.getElementById('vac2')
        let elem4: any = document.getElementById('vac3')
        let elem5: any = document.getElementById('vac4')
        let elem6: any = document.getElementById('vac5')

        let profession = elem1!.value;
        let experience = elem2!.value;
        let education = elem3!.value;
        let salary = elem4!.value;
        let schedule = elem5!.value;
        let other = elem6!.value;
        fetch('/api/admin/vacancy', {
            method: 'POST',
            body: JSON.stringify({
                profession: profession,
                experience: experience,
                education: education,
                salary: salary,
                schedule: schedule,
                other: other,
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
                <input id='vac' type="text" placeholder='Профессия' />
                <input id='vac1' type="text" placeholder='Требуемый опыт работы' />
                <input id='vac2' type="text" placeholder='Образование' />
                <input id='vac3' type="text" placeholder='Зарплата' />
                <input id='vac4' type="text" placeholder='График' />
                <input id='vac5' type="text" placeholder='Прочие требования' />
                <input type="button" value="Отправить" onClick={sending} />


            </form>
        </div>
    )
}

export default AddVacancy