import React, { useState } from 'react'
import "./User_Input.css";
import uuid from 'react-uuid';
import UserList from '../UserDetails/UserList';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function User_Input() {
 const [Title,SetTitle]= useState("")
 const [Discription,SetDiscription]= useState("")
 const [selectedOption, setSelectedOption] = useState('');
 const [itemlist,SetItemlist]=useState([])
 const [EditItems,SetEditid]=useState()
 
 

 const ChangeTitle=(e)=>{
 
  SetTitle(e.target.value)
  // console.log(e.target.value)
 

 }
 
 const ChangeDistription=(e)=>{
  SetDiscription(e.target.value)
 }
 const handleOptionChange=(e)=>{
  setSelectedOption(e.target.value)
  console.log(e.target.value)
  
 }

 const AddItem=()=>{
  // const itemlistobj={id:uuid(),TitleName:Title,DiscriptionName:Discription,selectedOption:selectedOption}
  const NewData={
    id:uuid(),
    Title:Title,
    Discription:Discription,
    selectedOption:selectedOption
  };
  SetItemlist((prevData)=>[...prevData,NewData])

  SetTitle("")
  SetDiscription("")
  setSelectedOption("")
  toast.success("Item Added SuccessFully......")
 


 }

 const DeleteItem=(id)=>{
  console.log(id)
  const FilterItem=itemlist.filter((value)=>{
    return (value.id !==id)

  })
  SetItemlist(FilterItem)
  toast.error("item deleted")
 }
 const EditItem=(id)=>{
  const Edit=itemlist.find((edits)=>{
     return (edits.id===id)
  })
  SetTitle(Edit.Title);
  SetDiscription(Edit.Discription)
  setSelectedOption(Edit.selectedOption)
  SetEditid(id)


 }
 
  return (
<div>
    <div className='Header'>
      <h1>Seller Admin Page</h1>
    </div>

    <div className='input-div'>
        <div>
          <label>Selling Price :</label><br/>
         <input type='Number' placeholder='Enter Price...' onChange={ChangeTitle} value={Title} />
     </div>
       <div>
         <label>Product Name :</label><br/>
         <input type='text' placeholder='Product Name...' onChange={ChangeDistription}  value={Discription}/>
       </div>
         <div>
         <label >Select item:</label><br/>
         <select value={selectedOption} onChange={handleOptionChange}>
         <option value="">Select an option</option>
         <option value="Electronics ">Electronics Item</option>
         <option value="Food">Food Item</option>
         <option value="Skin Care">Skin Care</option>
       </select>
        </div>
        <div>
         <button className='btn1' onClick={AddItem}  itemlist={itemlist}>Add Item</button>
        </div>
    </div>
    <div>
   <UserList itemlist={itemlist} DeleteItem={DeleteItem} EditItems={EditItem}/>
   <ToastContainer theme='colored'/>
    </div>
</div>
 )
}

export default User_Input
