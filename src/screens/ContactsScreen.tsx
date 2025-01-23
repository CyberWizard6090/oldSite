import React, { useEffect, useState } from 'react'


const ContactsScreen = (props: any) => {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    fetch('/api/contacts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const listcon = posts.map((item: any) => (
    <div className='contact'>
      <p>{item.name} </p>
      <p className='phone'>{item.number} </p>
    </div>

  ))

  return (
    <div className='info'>
      <div className="in__w">
        <div className='color_lv_1-2 working__schedule'>

          <h2>Юридический адрес</h2>
          <div className="w__w">
            <p>Забайкальский край, Г. Чита, улица Ленинградская, д 104</p>
          </div>

          <h4>График работы медицинского учреждения</h4>
          <div className="w__w">
            <p>Понедельник: 08:45 - 17:00</p>
          </div>
          <div className="w__w">
            <p>Вторник: 08:45 - 17:00</p>
          </div>
          <div className="w__w">
            <p>Среда: 08:45 - 17:00 </p>
          </div>
          <div className="w__w">
            <p>Четверг: 08:45 - 17:00</p>
          </div>
          <div className="w__w">
            <p>Пятница: 08:45 - 16:45</p>
          </div>
          <div className="w__w">
            <p>Суббота: <span>Выходной</span></p>
          </div>
          <div className="w__w">
            <p>Воскресенье <span>Выходной</span></p>
          </div>
        </div>
        <div className='color_lv_1-2 contacts'>
          <h2>Контакты:</h2>
          <div className="wrap__contacts">
            {listcon}
          </div>


        </div>
      </div>


    </div>
  )
}

export default ContactsScreen