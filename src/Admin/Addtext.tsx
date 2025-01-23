import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';

export const Addhead = (props:any) => {
    return (
        <div className='Addtext itemlist' id={props.id}>

            <input type="text" name="1" className='data__content' id={props.id} placeholder='Введите заголовок' />
        </div>
    )
}

export const Addsub = (props:any) => {
    return (
        <div className='Addtext itemlist' id={props.id}>

            <input type="text" name="2" className='data__content'  placeholder='Введите подзаголовок' />
        </div>
    )
}

export const Addtext = (props:any) => {
    return (
        <div className='Addtext itemlist' id={props.id}>

            <TextareaAutosize  name="3"  className='data__content' placeholder='Введите текст' />

        </div>
    )
}
