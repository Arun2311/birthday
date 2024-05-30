import React from "react";

import { useForm } from "react-hook-form";

export default function HookForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const submit = (data)=>{
console.log(data)
  }

  return (
    <div>
      <label>Name*</label>
      <input {...register("name",{required: "Name is Required" })} placeholder="enter u r name"/>

<p className="text-danger">{errors?.name?.message}</p>
      
      <br />
      <br />

      <label>Age*</label>
      <input  {...register("age" ,{required:"Age is Required"})}/>

<p>{errors?.age?.message}</p>
      <br />
      <br />

      <label>Email</label>
      <input  {...register("email")}/>
      <button onClick={handleSubmit(submit)}> Submit</button>
    </div>
  );
}
