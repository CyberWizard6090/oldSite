import { Link } from 'react-router-dom'
import pdf from './../img/pdf-file-3382.svg'

const Pdf = (props:any) => {
  let a:any

  return (
    <div className="pdf ">
    <Link to={"/Pdf/" + props.src} target="_blank">
      <div className="pdfimg">
        <img src={pdf} alt="" />
      </div>
      
      <div className="namepdf">
      {props.name}
      
      </div>

    </Link>
        



    </div>

   
  )
  
  
}

export default Pdf