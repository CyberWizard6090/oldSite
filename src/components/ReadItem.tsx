

import { Link } from 'react-router-dom';
import ImageView from './ImageView';
import React from 'react';
const ReadItem = (
    props: any
) => {
    const Titile = () => {
        if (props.title != "") {
            return (
                <div className="article__title">
                    <h2>{props.title}</h2>
                </div>
            )
        } else {
            return (<></>)
        }
    }
    const Text = () => {
        if (props.text != "") {
            return (
                <div className="text__read">
                    <p>{props.text}</p>
                </div>
            )
        } else {
            return (<></>)
        }
    }
    const Image = () => {
        return (
            <div className="img_new_wrap">
                <ImageView src={props.src} />
            </div>
        )
    }


    return (
        <div className="Read__item color_lv_1-2 block__rounding">


            <div className="con">
                <Titile />
                <Text />
                <Image />







            </div>

            <div className="info__bar">
                <p className='p_date'>Опубликованно: {props.date}</p>
                <Link to={props.url}>
                    <div className='btn__info__more' id={props.id}>
                        {props.nbut}
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default ReadItem