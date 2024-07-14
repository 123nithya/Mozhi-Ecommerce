import React from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { Link } from 'react-router-dom';
import CustomInputs from '../mainpageComponents/CustomInputs';

const SignUp = () => {
    return (
        <div>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='mb-3' style={{ marginTop: '5px' }}>Sign Up</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInputs type='text' name='name' placeholder='Name' />
                                    <CustomInputs type='email' name='email' placeholder='Email' />
                                    <CustomInputs type='password' name='password' placeholder='Password' />
                                    <CustomInputs type='tel' name='mobile' placeholder='Mobile Number' />
                                    <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                        <button className='button border-0'>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
