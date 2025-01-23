import React from 'react'
import './../css/gosuslugi.css'

const Gosuslugi = () => {
  // console.log('1 >>> window.parent.location: \n', window.parent.location);
  // console.log('2 >>> window.parent.location.href: \n', window.parent.location.href);
  // console.log('3 >>> window.location: \n', window.location);
  // console.log('4 >>> window.location.href: \n', window.location.href);
  // console.log('5 >>> window.location.host: \n', window.location.host);
  // console.log('6 >>> window.location.origin: \n', window.location.origin);


  /* eslint-disable */
  function Widget(src, opaId, isFz59) {
    const ACTION_ID = 'js-show-iframe-wrapper';
    const BLOCK_ACTION_CLASS = 'pos-block-action';

    let fz59 = isFz59 ? 'true' : 'false';
    src += '?opaId=' + opaId + '&fz59=' + fz59;

    let div = document.createElement('div');
    let header = document.createElement('header');
    let overlay = document.createElement('div');
    let body = document.getElementsByTagName('body')[0];

    //  css
    div.style.background = 'white';
    div.style.position = 'fixed';
    div.style.maxWidth = '620px';
    div.style.maxHeight = '768px';
    div.style.margin = 'auto';
    div.style.top = '0';
    div.style.bottom = '0';
    div.style.left = '0';
    div.style.right = '0';
    div.style.zIndex = '999999999';

    overlay.style.position = 'fixed';
    overlay.style.zIndex = '999999998';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.backgroundColor = 'rgba(0,0,0,.3)';

    // attr
    div.setAttribute('id', 'js-iframe-wrapper');
    overlay.setAttribute('id', 'js-iframe-overlay');
    let iframe = document.createElement('iframe');

    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';

    iframe.setAttribute('src', src);
    iframe.setAttribute('id', 'js-iframe-widget');
    iframe.referrerPolicy = 'unsafe-url';

    div.appendChild(iframe);
    header.innerHTML = 'Новое обращение';

    function destroy() {
      let body = document.getElementsByTagName('body')[0];
      let wOverlay = document.getElementById('js-iframe-overlay');
      let wWrapper = document.getElementById('js-iframe-wrapper');
      wWrapper && body.removeChild(wWrapper);
      wOverlay && body.removeChild(wOverlay);
    }

    function create() {
      body.appendChild(div);
      body.appendChild(overlay);
    }

    function closeWidget() {
      destroy();
    }

    function showWidget() {
      create();
    }

    const openWidgetBtn = document.getElementById(ACTION_ID);

    if (openWidgetBtn) {

      openWidgetBtn.addEventListener('click', function (e) {

        e.preventDefault();
        showWidget();
      });

      openWidgetBtn.addEventListener('touchend', function (e) {

        if (!document.getElementById(ACTION_ID).classList.contains(BLOCK_ACTION_CLASS)) {

          showWidget();
        } else {

          setTimeout(function () {
            document.getElementById(ACTION_ID).classList.remove(BLOCK_ACTION_CLASS);
          }, 0);

        }

      });

      openWidgetBtn.addEventListener('touchmove', function (e) {

        document.getElementById(ACTION_ID).classList.add(BLOCK_ACTION_CLASS); // предотвращаем экшен при скролле на лаптопах
      });
    }

    window.addEventListener('message', function (event) {
      if (event.data.close) {
        closeWidget();
      }
    }, false);

    // переопределяем слоган
    (function overrideSlogan() {
      const posBanner = document.getElementById(ACTION_ID);
      const posButton = posBanner.querySelector('.bf-1 .pos-banner-btn_2') || posBanner.querySelector('.bf-2 .pos-banner-btn_2');

      if (posBanner) {
        const sloganTag = posBanner.querySelector('.bf-1__slogan') || posBanner.querySelector('.bf-2__slogan');

        if (sloganTag) {
          sloganTag.innerHTML = 'Решаем вместе';
        }

        if (posButton) {
          posButton.innerHTML = 'Сообщить о проблеме';
          posButton.style.width = '240px';
        }
      }

    })();

  }

  (function () {
    "use strict";
    function ownKeys(e, t) {
      let n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) r = r.filter(function (t) {

          return Object.getOwnPropertyDescriptor(e, t).enumerable

        });
        n.push.apply(n, r)
      }
      return n
    }
    function _objectSpread(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        if (t % 2) ownKeys(Object(n), true).forEach(function (t) { _defineProperty(e, t, n[t]) }); else if (Object.getOwnPropertyDescriptors) Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)); else ownKeys(Object(n)).forEach(function (t) { return Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); })
      }
      return e
    }
    function _defineProperty(e, t, n) {
      if (t in e) Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true });
      else e[Number(t)] = n; return e
    }
    var POS_PREFIX_17 = "--pos-banner-fluid-17__",
      posOptionsInitialBanner17 = {
        background: "#ffffff",
        "grid-template-columns": "100%",
        "grid-template-rows": "188px auto",
        "max-width": "100%",
        "text-font-size": "24px",
        "text-margin": "0 0 24px 0",
        "button-wrap-max-width": "100%",
        "bg-url": "url('https://pos.gosuslugi.ru/bin/banner-fluid/6/banner-fluid-bg-6.svg')",
        "bg-url-position": "center bottom",
        "bg-size": "contain",
        "content-padding": "24px",
        "content-grid-row": "0",
        "logo-width": "65px",
        "logo-wrap-top": "16px",
        "logo-wrap-right": "13px",
        "slogan-font-size": "12px"
      },
      setStyles = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_17;
        Object.keys(e).forEach(function (r) {
          t.style.setProperty(n + r, e[r])
        })
      },
      removeStyles = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_17;
        Object.keys(e).forEach(function (e) { t.style.removeProperty(n + e) })
      };
    function changePosBannerOnResize() {
      var e = document.documentElement,
        t = _objectSpread(posOptionsInitialBanner17),//1 2
        n = document.getElementById("js-show-iframe-wrapper"),
        r = n ? n.offsetWidth : document.body.offsetWidth;
      if (r > 340)
        t["grid-template-rows"] = "236px auto",
          t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/6/banner-fluid-bg-6-2.svg')",
          t["button-wrap-max-width"] = "209px",
          t["content-padding"] = "24px 32px",
          t["text-margin"] = "0 0 24px 0";
      if (r > 350)
        t["bg-url-position"] = "center bottom calc(100% - 40px)";
      if (r > 415)
        t["bg-url-position"] = "center bottom";
      if (r > 568)
        t["grid-template-columns"] = "1fr 292px",
          t["grid-template-rows"] = "100%",
          t["content-grid-row"] = "1",
          t["content-padding"] = "32px 24px 24px",
          t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/6/banner-fluid-bg-6.svg')";
      if (r > 783)
        t["grid-template-columns"] = "1fr 400px",
          t["text-font-size"] = "32px",
          t["content-padding"] = "32px 24px",
          t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/6/banner-fluid-bg-6-2.svg')",
          t["bg-url-position"] = "center bottom calc(100% - 25px)";
      if (r > 820)
        t["grid-template-columns"] = "1fr 420px", t["bg-url-position"] = "center bottom";
      if (r > 1098)
        t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/6/banner-fluid-bg-6-3.svg')",
          t["grid-template-columns"] = "1fr 557px",
          t["text-font-size"] = "36px",
          t["content-padding"] = "32px 32px 32px 50px",
          t["logo-width"] = "78px",
          t["logo-wrap-top"] = "20px",
          t["logo-wrap-right"] = "17px",
          t["slogan-font-size"] = "15px";
      if (r > 1422)
        t["max-width"] = "1422px",
          t["grid-template-columns"] = "1fr 720px",
          t["content-padding"] = "32px 48px 32px 160px",
          t.background = "linear-gradient(90deg, #ffffff 50%, #f8efec 50%)";
      setStyles(t, e)
    }
    changePosBannerOnResize(),
      window.addEventListener("resize", changePosBannerOnResize),
      window.onunload = function () {
        var e = document.documentElement,
          t = _objectSpread(posOptionsInitialBanner17);
        window.removeEventListener("resize", changePosBannerOnResize),
          removeStyles(t, e)
      };
  })()
  

 setTimeout(() => {
      Widget("https://pos.gosuslugi.ru/form", 227531)
    }, 10000);
 
  return (

    <div className='color_lv_1-2 gosuslugi' id='GOSUSLUGI'>

      <div id='js-show-iframe-wrapper'>
        <div class='pos-banner-fluid bf-17'>

          <div class='bf-17__decor'>
            <div class='bf-17__logo-wrap'>
              <img
                class='bf-17__logo'
                src='https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg'
                alt='Госуслуги'
              />
              <div class='bf-17__slogan'>Решаем вместе</div >
            </div >
          </div >
          <div class='bf-17__content'>
            <div class='bf-17__text'>
              Не смогли записаться к врачу?
            </div >

            <div class='bf-17__bottom-wrap'>
              <div class='bf-17__btn-wrap'>

                <button
                  class='pos-banner-btn_2'
                  type='button'
                >Написать о проблеме
                </button >
              </div >
            </div>
          </div >

        </div >
      </div >




    </div>
  )
}

export default Gosuslugi
