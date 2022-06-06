import { updateEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const [updatePassword, updating] = useUpdatePassword(auth);

    const hadleResetPassword = async() =>{
      await updateEmail(email);
          alert('Updated email address');
    }

    const from = location.state?.from?.pathname || "/";
  
    const [
        signInWithEmailAndPassword, user, loading, error
        
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }


    const hadlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    
    if(user){
        navigate('/home')
    }

    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        

    }



    return (
        //Log in method
        <div className='form-container w-50 mx-auto'>
            <div>
                <h2 className='form-title'>Login</h2>
                <Form onSubmit={handleUserSignIn}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={hadlePasswordBlur} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                <p>
                    New to Ema-John? <Link className='form-link text-decoration-none' to="/signup">Create an account</Link>
                </p>
                <p>
                    Forgotten Password? <Link onClick={hadleResetPassword}  className='form-link text-decoration-none' to="/signup">Reset Password</Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
            
        </div>
    );
};

export default Login;

