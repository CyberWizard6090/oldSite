
import ItemVacancies from '../components/ItemVacancies'
import "./../css/vacancies.css"
import { useEffect, useState } from 'react'
const Vacancies = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/vacancy')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);


  return (
    <div className='Vacancies'>
      <div className="ver__line">
        {posts.map((item: any) => (
          <ItemVacancies
            name={item.profession}
            emp={item.experience}
            edu={item.education}
            sal={item.salary}
            sch={item.schedule}
            oth={item.other}

          />
        ))}

      </div>


    </div>
  )
}

export default Vacancies