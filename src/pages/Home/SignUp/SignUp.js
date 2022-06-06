import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Button, Form } from 'react-bootstrap';


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();

  const  [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    if(user){
        navigate('/login')
    }

    const hadlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const hadleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }
    // const hadleCheckedBlur = event =>{
    //   setAgree(event.target.terms.checked)
    // }

    const handleUserSignIn = event =>{
        event.preventDefault();
        if(agree){
          createUserWithEmailAndPassword(email, password);
        }
        if(password !== confirmPassword){
            setError('Your password two did not match');
        }

        if(password.length <6){
            setError('Password must be 6 character or long')
        }

    }
    return (

        //Sign up method
        <div className='form-container'>
            <div className='w-50 mx-auto'>
                <h2 className='form-title'>Sign Up</h2>

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

  
  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={hadleConfirmPasswordBlur} type="password" placeholder="Confirm password" />
  </Form.Group>
  <Form.Group onClick={() =>setAgree(!agree)} className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className={agree? 'text-primary' : 'text-danger' }type="checkbox" label="Check me out" />
  </Form.Group>
  <Button disabled={!agree} variant="primary" type="submit">
    Submit
  </Button>
</Form>

                
                <p>
                    Already have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
            
        </div>
    );
};

export default SignUp;
