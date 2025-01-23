const Usefulitem = (props:any) => {
  return (
    <a href={props.url} target="_blank" rel="noopener">
    <div className='usefulitem color_lv_1-2'>
        <div className="usefulimg">
          <img src={props.src} alt="" />
           

        </div>
        <div className="usefulname">
            {props.name}

        </div>
    </div>
    </a>
  )
}

export default Usefulitem