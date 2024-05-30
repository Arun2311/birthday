import React, { useState } from "react";

export default function Deatailform() {

    const[name,setname] = useState("")
    const[age,setage] = useState("")
    const[phone,setphone] = useState("")
    const[email,setemail] = useState("")

    const[isshow,setishow] = useState(false)


    const handlename = (gow) =>{
        setname(gow.target.value)
    }


    const handleage = (e) =>{
        setage(e.target.value)
    }

    const handleemaail = (e) =>{
        setemail(e.target.value)
    }
    const handlephone = (e) =>{
        setphone(e.target.value)
    }

    const handleshow = () =>{
        setishow(false)
    }
  return (
    <div>
      <h1>Student Detail</h1>

      <label>Name : </label>
      <input onChange={handlename} placeholder="Enter Your Name" />

      <br />
      <br />


      <label>Age : </label>
      <input onChange={handleage} type="Number" placeholder="Enter Your Age" />

      <br />
      <br />

      <label>Phone : </label>
      <input  onChange={handlephone} type="Number" placeholder="Enter Your No" />
      <br />
      <br />
      <label>Email : </label>
      <input onChange={handleemaail}  placeholder="Enter Your Email" />
      <br />
      <br />

      <button onClick={handleshow}>Submit</button>





{isshow ?
      <div>

        <h1>Name  : {name}</h1>
        <h1>Age  : {age}</h1>
        <h1>Phone  : {phone}</h1>
        <h1>Email  : {email}</h1>
      </div>
: <h1>No data found</h1>

}

    </div>

  );
}












      {/* <label>Age : </label>
      <input type="Number" placeholder="Enter Your Age" />

      <br />
      <br />

      <label>Phone : </label>
      <input type="Number" placeholder="Enter Your No" />
      <br />
      <br /> */}