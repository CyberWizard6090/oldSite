
const ItemVacancies = (props:any) => {
  
  

  return (
    <div className='ItemVacancies color_lv_1-2'>
        <h1>{props.name}</h1>
    
        <p> <h3>Требуемый опыт работы:</h3>{props.emp} </p>
        <hr />
     
        <p><h3>Образование:</h3> {props.edu}</p>
        <hr />
        <p><h3>Зарплата:</h3> {props.sal}</p>
        <hr />
        <p><h3>График:</h3> {props.sch}</p>
        <hr />
        <p>
          <h3>Прочие требования:</h3> 
          {props.oth}
        </p>
      

    </div>
  )
}

export default ItemVacancies
