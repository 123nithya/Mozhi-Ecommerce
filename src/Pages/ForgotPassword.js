import React from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { Link } from 'react-router-dom';
import CustomInputs from '../mainpageComponents/CustomInputs';

const ForgotPassword = () => {
    return (
        <div>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='mb-3' style={{ marginTop: '5px' }}>Reset Your Password</h3>
                                <p className='text-center mt-2 mb-3'>We Will Send you an email to reset your password</p>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInputs type='email' name='email' placeholder='Email' />
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center flex-column gap-30 align-items-center'>
                                            <button className='button border-0' type='submit'>Submit</button>
                                            <Link to={"/login"}>Cancel</Link>
                                        </div>
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

export default ForgotPassword
