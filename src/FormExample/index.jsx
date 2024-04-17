import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';



const FormExample = () => {
//     let userInfo = "";
//   function toggleGetData() {
//     setData(true);
//     userInfo = JSON.parse(localStorage.getItem("userInfo"));
   
//     setName(userInfo.Name);
//     setEmail(userInfo.Email);
//     setNumber(userInfo.Number);
//   }

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [number, setNumber] = useState("");
// function handleSubmission() {
//     localStorage.clear();
//     let userData = {
//       Name: name,
//       Email: email,
//       Number: number,
//     };
//     localStorage.setItem("userInfo", JSON.stringify(userData));
//     alert("Data recorded!");
//     window.location.reload();
//   }
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("")
  const [editData, setEditData] = useState(false);
//   console.log(editData);
//   console.log(email);
    const Items = JSON.parse(localStorage.getItem("userInfo"));
    const [Info, setInfo] =useState(Items??[]);

  function handleSubmission() {
    let userData = {
      Name: name,
      Email: email,
      Number: number,
      Address: address,
    };
    const InfoValues = [...Info , userData];
    setInfo(InfoValues);
    

    
    localStorage.setItem("userInfo", JSON.stringify(InfoValues));
    document.getElementsByClassName("span").style = "block";
    alert("Data recorded!");
  }

  let userInfo = "";
  function toggleGetData() {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userInfo.Email);
    setName(userInfo.Name);
    setEmail(userInfo.Email);
    setNumber(userInfo.Number);
    setAddress(userInfo.Address);
    
  }

  return (
    <>


<div className="background ">
      <div className="box flex flex-col justify-center items-center w-full">
        <div className=" flex flex-col bg-slate-50 p-16 mt-16 shadow-xl rounded-lg w-6/12">
          <h3 className='text-4xl text-center text-slate-700 font-semibold'>Sign Up</h3>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="email"
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="number"> Number </label>
          <input
            type="number"
            name="num"
            placeholder="Type your number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
          <label htmlFor="address"> Address </label>
          <input
            type="text"
            name="address"
            placeholder="Type your address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <NavLink to='dashboard' onClick={handleSubmission} className='bg-slate-700 text-white text-center py-2 my-2 rounded hover:bg-slate-900'>Sign Up</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default FormExample