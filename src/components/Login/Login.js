import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const location=useLocation();
    const navigate=useNavigate();
    const from=location?.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEvent = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        
    }
    if (loading) {
        return <p>Loading...</p>;
      }
    if(user){
        navigate(from, {replace:true} )
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>

                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEvent} type="email" name="email" id="1" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handleEvent} type="password" name="password" id="2" required />
                    </div>
                    <p style={{color:"red"}}>{error?.message}</p>
                    <input type="submit" value="Login" className='form-submit' required />

                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <hr />
                <div className="form-container-button">
                    <button>Sign Up with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;