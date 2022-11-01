import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [user] = useAuthState(auth);

    const handleEvent=(e)=>{
        
        if(e.target.name==="name"){
            setName(e.target.value);
        }
        if(e.target.name==="email"){
            setEmail(e.target.value);
        }
        if(e.target.name==="address"){
            setAddress(e.target.value);
        }
        
    }

    return (
        <div className='form-container'>
        <div>
        <h1 className='form-title'>Shipping Information</h1>
       <form action="">
       <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleEvent} type="text"   name="name" id="1" required/>
        </div>

       <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEvent} value={user?.email} type="email" name="email" id="2" required readOnly/>
        </div>

        <div className="input-group">
            <label htmlFor="password">Address</label>
            <input onBlur={handleEvent} type="text" name="address" id="3"required />
        </div>

        <input onClick={()=>{console.log(user?.name)}}  type="submit" value="Add Shipping" className='form-submit' required/>
       </form>
      
       
       
        </div>
    </div>
    );
};

export default Shipment;