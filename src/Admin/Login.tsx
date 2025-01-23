import { loadingButtonClasses } from '@mui/lab';
import React, { FormEvent, useEffect, useState } from 'react';
import logo from './../img/LOGO.svg'




const Login = ({ fingerprint, token, setToken }: any) => {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [reply, setReply] = useState('');





   const handleLoginChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {

      setUsername(e.target.value)

   };

   const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {

      setPassword(e.target.value)

   };


  function handleSubmit () {

     
         fetch('/api/singin', {
            method: 'POST',
            body: JSON.stringify({
               login: username,
               password: password,
               fingerprint: fingerprint,
            }),
            headers: {
               'Content-type': 'application/x-www-form-urlencoded',
            },
   
         })
            .then(r => r.json())
            .then((data) => {
               setReply(data);
            });
            window.location.reload()
   };
   
   function myFunction() {
      const x: any = document.getElementById("myInput");
      if (x!.type === "password") {
         x!.type = "text";
      } else {
         x!.type = "password";
      }
   }

   return (

      <div className='window_admin shadow_color'  >
         <div className="fil"></div>
         <div className="window_auto">

            <div className='name-auto'>
               <h1>Авторизация </h1>
            </div>

            <form onSubmit={handleSubmit}>
               <div className="wrap-login">
                  <div className='crust'>
                     <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>

                  </div>
                  <input
                     placeholder='Введите логин'
                     onChange={handleLoginChange}
                     required
                  />
                  <div className='crust'></div>
               </div>
               <div className="wrap-login">
                  <div className='crust'>
                     <svg id="Layer_1" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22 0h-2.172a2.978 2.978 0 0 0 -2.121.879l-8.361 8.36a7.537 7.537 0 1 0 5.415 5.415l1.239-1.239v-2.415h3v-3h2.414l1.707-1.707a2.983 2.983 0 0 0 .879-2.122v-2.171a2 2 0 0 0 -2-2zm0 4.171a1 1 0 0 1 -.293.708l-1.121 1.121h-3.586v3h-3v3.585l-1.545 1.545a5.64 5.64 0 0 1 .545 2.37 5.5 5.5 0 1 1 -5.5-5.5 4.236 4.236 0 0 1 2.369.544l9.252-9.251a1.009 1.009 0 0 1 .707-.293h2.172zm-17 13.829a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z" /></svg>

                  </div>
                  <input
                     id="myInput"
                     type="password"
                     placeholder='Введите пароль'
                     onChange={handlePasswordChange}
                     required
                  /> <div className='crust'>
                     <label htmlFor="pasview"></label>
                     <input id='pasview' type="checkbox" onClick={myFunction} />
                  </div>

               </div>
               <input type="submit" value="Войти" id='logadmin' />

            </form>





         </div>
      </div>
   )
}

export default Login


