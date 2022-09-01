import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);
        // }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');

    }

    const navigateRegister = event => {
        navigate('/login')
    }

    // this terms use begin its below terms
    // if (user) {
    //     navigate('/home');
    // }
    if (user) {
        console.log(user);
    }

    return (
        <div className='container w-50 mx-auto mt-2'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? "text-primary" : 'text-danger'} htmlFor="terms">Accept Genius car terms and conditions</label> */}
                <label className={`ps-2 ${agree ? "text-primary" : "text-danger"}`} htmlFor="terms">Accept Genius car terms and conditions</label>
                <Button
                    disabled={!agree}
                    variant="primary d-block w-50 mx-auto my-2"
                    type="submit">
                    Register
                </Button>

            </Form>
            <p className='mt-3'>Already have an account? <span className='text-primary pointer' onClick={navigateRegister}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;