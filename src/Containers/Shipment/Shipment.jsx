import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { userInfoContext } from "../../App";
import './Shipment.css';
export default function Shipment() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser,setLoggedInUser] = useContext(userInfoContext)
  const [isShip, setIsShip] = useState(false);
  const [name, setName] = useState('');
  const onSubmit = (data) => {
      setIsShip(true);
      setName(data.name)
  }

  return (
    <div>
        {isShip ? (
            <div className="order-completed">
                <h3>Thank you dear, {name}</h3>
                <p>Your order completed.</p>
            </div>
        ):(
            <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
      <input name="name" placeholder='User name' ref={register} />

      <label htmlFor="email">Email: </label>
      <input name='email' placeholder='User email' defaultValue={loggedInUser.email} name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}

      <label htmlFor="phone">Phone No: </label>
      <input name='phoneNo' placeholder='User phone'  name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}

      <label htmlFor="address">Address: </label>
      <input name='address' placeholder='User address'  name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}

      <label htmlFor="address">Zilla: </label>
      <input name='zilla' placeholder='User Zilla'  name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}

      <label htmlFor="address">Code: </label>
      <input name='code' placeholder='Area Code'  name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}
      
      <input type="submit" value='Submit' className='submit' />    
    </form>
        )}
    </div>
  );
}