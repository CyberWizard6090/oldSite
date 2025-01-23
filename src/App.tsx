import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import {
  Outlet,
  useNavigate,
} from 'react-router-dom';

import './css/style.css';
// import './css/color.css';
import './css/font.css';
import './css/responsiveness.css';
import './css/styleinfo.css';

import './css/СolorScheme.css';
import './css/NavBar.css';
import './css/Grid.css';
import './css/Image.css';
import './css/Read.css';
import './css/Home.css';
import { useTheme } from './hooks/useTheme';
import React from 'react';

const App = () => {

  // const {theme, setTheme} = useTheme()
  const history = useNavigate()
  let a: any


  useEffect(() => {
    a = document.getElementById('app');
    a.scroll(0, 0)
  }, [history])

  return (
    <>
      <div id='app' className="app color_lv_0">
        {/* <Navbar /> */}
        <Menu />
        <main className='Main' id='m'>
          <Outlet />
        </main>
      </div>
    </>
  );

}

export default App

