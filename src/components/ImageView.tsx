import React, { useState } from 'react'
import { Spinner } from './Spinner';

const ImageView = ({ src }:any) => {
    const [active, setActive] = useState(false);
    const View: any = (props: any) => {
        if (props.active) {
            return (
                <div className='windows'>
                    <div className="ex__win" onClick={on_off}>
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z" fill="#000000" />
                        </svg>
                    </div>
                    <div className="win_wrap_img">
                        <div className="img_w">
                            <img src={window.location.origin + "/pictures/" + src} alt="no image" />
                        </div>
                    </div>
                </div>
            )
        }
    }
    const [isLoading, setIsLoading] = useState(true)
    const LoadTrue = () => { setIsLoading(false) }
    var img = document.createElement('img');
    img.src = window.location.origin + "/pictures/" + src; // здесь начинается загрузка изображения
    img.onload = function () {
        setIsLoading(false)
    }
    const ImgLoad = () => {
        return (
            <img
                src={window.location.origin + "/pictures/" + src}
                loading="lazy"
                onLoad={LoadTrue}
                onClick={on_off}
                alt="" />
        );
    }
    function on_off() {
        if (active) {
            setActive(false)
            enableScroll()
            
        }
        else {
            setActive(true)
            disableScroll()
        }
    }
    function disableScroll() {
        const app = document.querySelector("app")
        // Get the current page scroll position
        document.body.style.overflow = "hidden";
    
        // // if any scroll is attempted, set this to the previous value
        // window.onscroll = function() {
        //     window.scrollTo(scrollLeft, scrollTop);
        // };
      }
    
      function enableScroll() {
        // window.onscroll = function() {};
        const app = document.querySelector("app")
        // Get the current page scroll position
        document.body.style.overflow = "scroll"
      }
    return (
        <>
            <div className=' img__view' >
                <View active={active} src={src} />
                {isLoading ? <Spinner /> : <ImgLoad />}
            </div>
        </>
    )
}

export default ImageView