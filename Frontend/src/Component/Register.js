import React,{useState} from 'react';
import axios from 'axios';
import '../App.css';

function Register() {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    
    const handleSave =()=>{
      const data = {
        Name: name,
        PhoneNumber: phoneNumber,
        Address: address,
        IsActive : 1 
      };
      const url = 'https://localhost:44312/api/Test/Register';
      axios.post(url, data).then((result)=>{
        alert(result.data);
      }).catch((err)=>{
        alert(err);
      })
    }
 
   return (
    <div>
      <label>Name </label>
      <input type="text" id='txtName' value={name} placeholder='John Doe' onChange={(e) =>setName(e.target.value)} />
      <br />
      <label>Phone Number </label>
      <input type="text" id="txtPhone" value={phoneNumber} placeholder='5*******' onChange={(e)=>setPhoneNumber(e.target.value)} />
      <br />
      <label>Address</label>
      <input type="text" id='txtAddress' value={address} placeholder='Your Address' onChange={(e)=>setAddress(e.target.value)} />
      <br />
      <button onClick={handleSave}>SAVE</button>
    </div>
  )
}

export default Register
