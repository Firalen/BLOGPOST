import React from 'react'
import { useNavigate } from 'react-router-dom';
import PizzaLeft from '../img/pepperoni.jpg'
import {useForm} from  "react-hook-form";
import * as yup from'yup';
import {yupResolver} from '@hookform/resolvers/yup';


const Contact = () => {

  const navigat=useNavigate();
  const schema = yup.object().shape({
    firstname:yup.string().required("fill your name"),
    email:yup.string().email().required("invalid email"),
    message:yup.string().min(5).required("fill message"),
   });
  const {register,handleSubmit,formState:{errors}}= useForm({
    resolver:yupResolver(schema),
  });
  const onSubmit=(data)=>{
    console.log(data)
    navigat('/submit')
  }
  
  return (
      <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>first name</label>
          <input type='text' placeholder='enter firstname' {...register("firstname")}/>
          <p className='p'>{errors.firstname?.message}</p>
          <label>email</label>
          <input type='text' placeholder='enter email' {...register("email")}  />
          <p className='p'>{errors.email?.message}</p>
          <label>message</label>
          <input type='text' placeholder='enter message' {...register("message")}/>
          <p className='p'>{errors.message?.message}</p>
          <input type='password' placeholder='****'/>
          <input onClick={onsubmit} type="submit" className="inputs" />
        </form>
    </div>
    </div>
  )
}

export default Contact;
