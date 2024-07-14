import React from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { Link } from 'react-router-dom';
import CustomInputs from '../mainpageComponents/CustomInputs';

const Login = () => {
    return (
        <div>
            <Meta title={"Singin"} />
            <BreadCrumb title="Singin" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='mb-3' style={{ marginTop: '5px' }}>Login</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInputs type='email' name='email' placeholder='Email' />
                                    <CustomInputs type='password' name='password' placeholder='Password' />
                                    <div>
                                        <Link to={"/forgotPassword"}>Forgot Password?</Link>
                                        <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                            <button className='button border-0' type='submit'>Login</button>
                                            <Link to={"/signup"} className='button signup'>SignUp</Link>
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

export default Login
