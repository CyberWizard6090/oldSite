import React from 'react'

const Img = (props:any) => {
    document.querySelector('.img__preview')!.addEventListener('click', function(event) {
        let textItem:any = event.target;
        if(textItem) {
         let a = textItem.getAttribute('src').value;
         alert(a)
        }
      });
  return (
    <div>
      <img src={props.url} alt="" className='img__preview' />
    </div>
  )
}

export default Img