import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    // const [error,setError]=useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleCreateUser=(event)=>{
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
        setEmail("");
        setName("");
        setPassword("");
      }
      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return(<Navigate to='/'></Navigate>)
      }


    const handleEvent=(e)=>{
        
        if(e.target.name==="name"){
            setName(e.target.value);
        }
        if(e.target.name==="email"){
            setEmail(e.target.value);
        }
        if(e.target.name==="password"){
            setPassword(e.target.value);
        }
        
    }

    return (
        <div className='form-container'>
        <div>
        <h1 className='form-title'>SignUp</h1>
       <form action="">
       <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleEvent} type="text" name="name" id="1" required/>
        </div>

       <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEvent} type="email" name="email" id="2" required/>
        </div>

        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handleEvent} type="password" name="password" id="3"required />
        </div>

        <input onClick={handleCreateUser} type="submit" value="SignUp" className='form-submit' required/>
       </form>
       <p>
        Already Have an account? <Link className='form-link' to="/login">Login</Link>
       </p>
       <hr />
       <div className="form-container-button">
        <button>Sign Up with Google</button>
       </div>
        </div>
    </div>
    );
};

export default SignUp;