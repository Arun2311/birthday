import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function GroceryList() {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");

  const uuuid =uuidv4();

  useEffect(() => {
    handlefecth();
  }, []);


  const handlefecth = async () => {
    let res = await axios.get(" http://localhost:3000/todoList");
    setdata(res.data);
  };

  const handleinupt = (e) => {
    setinput(e.target.value);
  };

  const handleadd = async ()=>{
     let body={
     task:input,
     id:uuuid

    }

   await axios.post( "http://localhost:3000/todoList",body)
   handlefecth()
  }








  const handledelete = async(id) =>{


    
   await axios.delete("http://localhost:3000/todoList/"  + id)
   handlefecth()
  }

  const handleupdate = async (i) =>{
   let updatedtask = prompt("Enter U r Updated task",data[i].task)

   let body  = {
    id:data[i].id,
    task:updatedtask
   }

   await axios.put("http://localhost:3000/todoList/" +data[i].id ,body)
   handlefecth()

  }

  return (
    <div>
      <h1 className="ms-5">Groccery List</h1>

      <input
        onChange={handleinupt}
        className="ms-5 mt-5"
        placeholder="enter u r list"
      />

      <button className="ms-4 btn btn-primary" onClick={handleadd}>Add</button>

      <ol className="ms-5 mt-3">
        {data.map((da,i) => (
          <div>
            <li>{da.task}</li>
            <button onClick={()=>handleupdate(i)} className="btn btn-warning mt-3 mb-3">Update</button>




            <button onClick={()=>handledelete(da.id)} className="btn btn-danger ms-3 mt-3 mb-3">Delete</button>
          </div>
        ))}
      </ol>
    </div>
  );
}
export default GroceryList;
