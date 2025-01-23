import { useEffect, useState } from 'react'
import { redirect, useNavigate} from 'react-router-dom'
import Item_stucture from '../components/Item_stucture'
import './../css/structure.css'

const StructureScreen = () => {
  const loc = window.location.pathname
  const history = useNavigate();
  const [post, setPost] = useState([]);
 
  useEffect(() => {
    let doc = ""
    if (loc === "/structure/separation"){
      doc = "hos";
    }
    if (loc === '/structure/polyclinic'){
      doc = "pol";
    }
  
    fetch('/api/branches/' + doc)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [history])



  return (
    <div className='structure'>
      <div className='wrap_item_structire'>
        <div className="wrap__floors">
          <div className='floors '>
            {post.map((item: any) => (
              <Item_stucture name={item.name} url={item.idbranch} />
            ))}
          </div>
        </div>
      </div>

    </div>

  )
}

export default StructureScreen