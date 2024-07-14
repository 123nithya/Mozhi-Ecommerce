import React from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';

const WishList = () => {
    return (
        <div>
            <Meta title={"Your Favorites"} />
            <BreadCrumb title="Your Favorites" />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlisst-card position-relative'>
                                <img src='/Images/cross-23.png' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='/Images/macreme-5.jpeg' className='img-fluid w-100' alt='macreme' />
                                </div>
                                <div className='py-3 details'>
                                    <h5 className='title'>Lorem ispum</h5>
                                    <h6 className='price'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlisst-card position-relative'>
                                <img src='/Images/cross-23.png' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='/Images/macreme-5.jpeg' className='img-fluid w-100' alt='macreme' />
                                </div>
                                <div className='py-3 details'>
                                    <h5 className='title'>Lorem ispum</h5>
                                    <h6 className='price'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlisst-card position-relative'>
                                <img src='/Images/cross-23.png' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='/Images/macreme-5.jpeg' className='img-fluid w-100' alt='macreme' />
                                </div>
                                <div className='py-3 details'>
                                    <h5 className='title'>Lorem ispum</h5>
                                    <h6 className='price'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList
