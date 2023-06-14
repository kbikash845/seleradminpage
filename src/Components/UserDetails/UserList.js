
import React from 'react'
import "./UserList.css"


function UserList(props) {
  
  const {itemlist,DeleteItem,EditItems }=props

  return (
    <div className='userlist'>
    <ul >
    <h1>Products:-</h1>
    {itemlist.map((data) => (
      <li  className='li1' key={data.id} >
        <p> Price:-{data.Title} ,</p>
        <p> Product Name:-{data.Discription} ,</p>
        <p>Item type:-{data.selectedOption} ,</p>
        <p>
        <button className='btn' onClick={()=>DeleteItem(data.id)} >Delete Item</button>
        <button className='btn2' onClick={()=>EditItems(data.id)} >Edit</button>
        </p>
      </li>
    ))}
  </ul>
  <h1>Total price Added:-{}</h1>
    </div>
  )
}

export default UserList
