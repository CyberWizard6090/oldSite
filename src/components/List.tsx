import React from 'react'

const List = (props:any) => {
  const list:any = props.list
  const listItems = list.map((list: any, index: any) =>
  <li>{list}</li>

 
);
  return (
    <div className='list'>
        <p>{props.name}</p>
        <ol className="rounded">
          {listItems}
 

</ol>
    </div>
  )
}

export default List