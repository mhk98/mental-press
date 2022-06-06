import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'

const SocialLogin = () => {

    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    let errorElement;

    if (error) {
        errorElement= <div>
        <p className='text-danger'>Error: {error?.message} {error?.message}</p>
      </div>
      }

    if(user){
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                {errorElement}
                
            </div>
        <div>
            
        <button className='btn btn-primary w-50 d-block mx-auto' onClick={ () => signInWithGoogle() }>
                <img src={google} alt="" />
               <span className='px-2 '> Google Sign In</span>
                </button>
        </div>
        </div>
    );
};

export default SocialLogin;