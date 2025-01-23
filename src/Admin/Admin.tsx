import  { useState } from 'react';
import Login from './Login'
import './admin.css'

import { Content } from './Content';
import FingerprintJS from '@fingerprintjs/fingerprintjs'


 



const Admin = () => {
  const [token, setToken]: any = useState('');
 
  fetch('/api/admin/verification', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  })
    .then(r => r.json())
    .then((data) => {
      setToken(data);
    });

  const [imprint, setImprint] = useState();

  const fpi = FingerprintJS.load()
  fpi
    .then(fp => fp.get())
    .then(result => setImprint)

function Authorization(props:any){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Content />;
  }
  return <Login fingerprint={imprint} />;
}



  return (
    <> <Authorization isLoggedIn={token}/></>
  
  )
}

export default Admin