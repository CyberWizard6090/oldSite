import { useState } from 'react'
import './../css/BTNvisually.css'
import { useTheme } from '../hooks/useTheme';
import { useFontSize } from '../hooks/useFontSize';
import { ActiveForm } from '../function/ActiveForm';
import React from 'react';
const BTNvisually = () => {
  const { theme, setTheme } = useTheme();
  const { size, setSize } = useFontSize();
  const [active, setActive] = useState(false);
  function Font() {
    let a: string = (document.querySelector("input[type='radio'][name=FontSize]:checked") as HTMLInputElement)!.value;

    if (a == "1") {
      setSize("small");
    } else if (a == "2") {
      setSize("medium");
    } else if (a == "3") {
      setSize("large");
    } else if (a == "4") {
      setSize("extra-large");
    }

  };
  function TypeTheme() {

    let a: string = (document.querySelector("input[type='radio'][name=TypeTheme]:checked") as HTMLInputElement)!.value;
    if (a == "1") {

      setTheme("light");

    } else if (a == "2") {

      setTheme("light-contrast");

    } else if (a == "3") {

      setTheme("dark");

    } else if (a == "4") {

      setTheme("dark-contrast");

    }
  };

  const StartStyle: any = () => {
    TypeTheme();
    Font();
    on_off();

  }

  const View: any = (props: any) => {

    if (props.active) {
      return (
        <div className='windows2'>

          <div className="settings_views">
            <span>beta version </span>
            <div className="block__size">
              <h3>Размер шрифта</h3>
              <div className="wrapper rate" >
                <div className="form_radio_btn">
                  <input id="radio-11" type="radio" name="FontSize" value="1" />
                  <label htmlFor="radio-11" id='size1'>Аа Бб Вв</label>
                </div>

                <div className="form_radio_btn">
                  <input id="radio-12" type="radio" name="FontSize" value="2" />
                  <label htmlFor="radio-12" id='size2'>Аа Бб Вв</label>
                </div>

                <div className="form_radio_btn">
                  <input id="radio-13" type="radio" name="FontSize" value="3" />
                  <label htmlFor="radio-13" id='size3'>Аа Бб Вв</label>
                </div>

                <div className="form_radio_btn">
                  <input id="radio-14" type="radio" name="FontSize" value="4" />
                  <label htmlFor="radio-14" id='size4'>Аа Бб Вв</label>
                </div>
              </div>
            </div>
            <div className="block__theme">
              <h3>Цветовая схема</h3>
              <div className="wrapper" >
                <div className="form_radio_btn">
                  <input id="radio-1" type="radio" name="TypeTheme" value="1" />
                  <label htmlFor="radio-1">Светлый</label>
                </div>

                <div className="form_radio_btn">
                  <input id="radio-2" type="radio" name="TypeTheme" value="2" />
                  <label htmlFor="radio-2">Светлый контраст</label>
                </div>

                <div className="form_radio_btn">
                  <input id="radio-3" type="radio" name="TypeTheme" value="3" />
                  <label htmlFor="radio-3">Темный</label>
                </div>

                <div className="form_radio_btn">
                  <input id="radio-4" type="radio" name="TypeTheme" value="4" />
                  <label htmlFor="radio-4">Темный контраст</label>
                </div>
              </div>

            </div>

            <button className="btnview" onClick={StartStyle}>
              применить
            </button >
          </div>

        </div>
      )
    }
  }

  function on_off() {

    if (active) {
      setActive(false);

    }
    else {
      setActive(true);
      setTimeout(() => {
        ActiveForm();
      }, 200);



    }

  }
  
  const Eye: any = () => {
    return (
      <svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m464.207 248.489c-20.733-35.839-50.546-65.897-86.217-86.925-36.763-21.671-78.869-33.126-121.768-33.126s-85.005 11.455-121.768 33.126c-35.671 21.027-65.483 51.086-86.217 86.925-2.688 4.647-2.688 10.375 0 15.022 20.733 35.839 50.546 65.897 86.217 86.925 36.763 21.671 78.869 33.126 121.768 33.126s85.005-11.455 121.768-33.126c35.671-21.027 65.483-51.086 86.217-86.925 2.688-4.647 2.688-10.375 0-15.022zm-110.422 7.511c0 52.823-42.199 95.972-94.655 97.516-.97.014-1.936.047-2.908.047s-1.938-.033-2.908-.047c-52.456-1.544-94.655-44.693-94.655-97.516s42.199-95.972 94.655-97.516c.97-.014 1.936-.047 2.908-.047s1.938.033 2.908.047c52.456 1.544 94.655 44.693 94.655 97.516zm-275.02 0c17.723-27.863 41.582-50.767 69.188-67.374-12.219 19.564-19.293 42.657-19.293 67.374s7.074 47.81 19.293 67.374c-27.606-16.607-51.466-39.511-69.188-67.374zm285.727 67.374c12.219-19.564 19.293-42.657 19.293-67.374s-7.074-47.81-19.293-67.374c27.606 16.607 51.466 39.511 69.188 67.374-17.722 27.863-41.581 50.767-69.188 67.374z" /><path d="m201.223 256c0 30.327 24.673 55 55 55s55-24.673 55-55-24.673-55-55-55-55 24.673-55 55zm80 0c0 13.785-11.215 25-25 25s-25-11.215-25-25 11.215-25 25-25 25 11.215 25 25z" /><path d="m256.223 89.771c8.284 0 15-6.716 15-15v-59.771c0-8.284-6.716-15-15-15s-15 6.716-15 15v59.771c0 8.284 6.715 15 15 15z" /><path d="m448.858 166.979c3.839 0 7.678-1.464 10.606-4.394l42.265-42.265c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-42.265 42.265c-5.858 5.858-5.858 15.355 0 21.213 2.93 2.93 6.769 4.394 10.607 4.394z" /><path d="m52.535 162.586c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-42.264-42.265c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213z" /><path d="m255.777 422.229c-8.284 0-15 6.716-15 15v59.771c0 8.284 6.716 15 15 15s15-6.716 15-15v-59.771c0-8.284-6.715-15-15-15z" /><path d="m52.535 349.414-42.265 42.265c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l42.265-42.265c5.858-5.858 5.858-15.355 0-21.213-5.856-5.858-15.354-5.858-21.212 0z" /><path d="m459.465 349.414c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l42.265 42.265c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z" /></g></svg>
    )
  }
  const Text: any = () => {
    return (
      <p>Версия для слабовидящих</p>
    )
  }

  let btn: any
  if (document.documentElement.clientWidth <= 1199) {
    btn = <Eye />;
  } else {
    btn = <Text />;
  }
  return (
    <div className="BTNvisually">
      <View active={active} />
      <button className="btnview" onClick={on_off}>
        {btn}

      </button >

    </div>
  )
}

export default BTNvisually