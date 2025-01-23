
import './../css/gallery.css';
import ImageView from './ImageView';


const Gallery = (props: any) => {





  let list = props.arr
  const listItems = list.map((item: any,) => {
    return (
      <div className="listimg-item">
      <ImageView src={item}/>
      </div>
    )
  });



  return (
    <div className='gallery'>

      <div className="listimg">
        {listItems}

      </div>


    </div>
  )
}

export default Gallery