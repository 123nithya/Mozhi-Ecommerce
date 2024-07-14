import React from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { Link } from 'react-router-dom';
import CustomInputs from '../mainpageComponents/CustomInputs';

const ResetPassword = () => {
    return (
        <div>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='mb-3' style={{ marginTop: '5px' }}>Reset Password</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInputs type='password' name='password' placeholder='Password' />
                                    <CustomInputs type='password' name='confpassword' placeholder='Confirm Password' />
                                    <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                        <button className='button border-0'>Ok</button>
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

export default ResetPassword
