import React,{useState} from 'react';
import axios from 'axios';
import '../App.css';

function Login() {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const handleClick =()=>{
    const data = {
      Name: name,
      PhoneNumber: phoneNumber
    };
    const url = 'https://localhost:44312/api/Test/Login';
    axios.post(url, data).then((result)=>{
      alert(result.data)
    }).catch((err)=>{
      console.log(err);
      alert(err);
    })
  }
  return (
    <div>
      <label>Name </label>
      <input type="text" placeholder='John Doe' value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
      <label>Phone Number</label>
      <input type="text" placeholder='5*******' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
      <br />
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
