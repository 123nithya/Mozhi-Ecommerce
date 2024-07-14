import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

const ProductsPage = () => {
    return (
        <div>
            <section className='featured-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Featured Products</h3>
                        </div>
                        <div className='col-3'>
                            <Link className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <BsFillHeartFill size={20} color='black' />
                                    </Link>
                                </div>
                                <div className='product-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first product' />
                                    <img src="/Images/handloomsaree.jpeg" className='img-fluid' alt='first product' />
                                </div>
                                <div className='product-details'>
                                    <h6 className='brand'>Handweaved cloths</h6>
                                    <h5 className='product-title'>
                                        Kids headphones bulk 10 pack multi colored for students
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-15'>
                                        <Link>
                                            <BsFillEyeFill size={20} color='black' />
                                        </Link>
                                        <Link>
                                            <BiCart size={20} color='black' />
                                        </Link>
                                        <Link>
                                            <BiGitCompare size={20} color='black' />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <BsFillHeartFill size={20} color='black' />
                                    </Link>
                                </div>
                                <div className='product-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first product' />
                                    <img src="/Images/handloomsaree.jpeg" className='img-fluid' alt='first product' />
                                </div>
                                <div className='product-details'>
                                    <h6 className='brand'>Handweaved cloths</h6>
                                    <h5 className='product-title'>
                                        Kids headphones bulk 10 pack multi colored for students
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-15'>
                                        <Link>
                                            <BsFillEyeFill size={20} color='black' />
                                        </Link>
                                        <Link>
                                            <BiCart size={20} color='black' />
                                        </Link>
                                        <Link>
                                            <BiGitCompare size={20} color='black' />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <BsFillHeartFill size={20} color='black' />
                                    </Link>
                                </div>
                                <div className='product-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first product' />
                                    <img src="/Images/handloomsaree.jpeg" className='img-fluid' alt='first product' />
                                </div>
                                <div className='product-details'>
                                    <h6 className='brand'>Handweaved cloths</h6>
                                    <h5 className='product-title'>
                                        Kids headphones bulk 10 pack multi colored for students
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-15'>
                                        <Link>
                                            <BsFillEyeFill size={20} color='black' />
                                        </Link>
                                        <Link>
                                            <BiCart size={20} color='black' />
                                        </Link>
                                        <Link>
                                            <BiGitCompare size={20} color='black' />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <BsFillHeartFill size={20} color='black' />
                                    </Link>
                                </div>
                                <div className='product-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first product' />
                                    <img src="/Images/handloomsaree.jpeg" className='img-fluid' alt='first product' />
                                </div>
                                <div className='product-details'>
                                    <h6 className='brand'>Handweaved cloths</h6>
                                    <h5 className='product-title'>
                                        Kids headphones bulk 10 pack multi colored for students
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-15'>
                                        <Link>
                                            <BsFillEyeFill size={20} color='black' />
                                        </Link>
                                        <Link>
                                            <BiCart size={20} color='black' />
                                        </Link>
                                        <Link>
                                            <BiGitCompare size={20} color='black' />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductsPage