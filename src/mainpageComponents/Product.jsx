import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import { BsFillHeartFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import handweaving from "../Images/handweaving.jpg";
import handloom from "../Images/handloomsaree.jpeg";

const Product = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className='container-xxl'>
                <div className='row'>
                    <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-4"} `}>
                        <Link to={"/product/:id"} className='product-card position-relative'>
                            <div className='wishlist-icon position-absolute'>
                                <Link>
                                    <BsFillHeartFill size={20} color='black' />
                                </Link>
                            </div>
                            <div className='product-image'>
                                <img src={handweaving} className='img-fluid' alt='first product' />
                                <img src={handloom} className='img-fluid' alt='first product' />
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
                                <p className={` description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua</p>
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
                    <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-4"} `}>
                        <Link to={"/product/:id"} className='product-card position-relative'>
                            <div className='wishlist-icon position-absolute'>
                                <Link>
                                    <BsFillHeartFill size={20} color='black' />
                                </Link>
                            </div>
                            <div className='product-image'>
                                <img src={handweaving} className='img-fluid' alt='first product' />
                                <img src={handloom} className='img-fluid' alt='first product' />
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
                                <p className={` description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua</p>
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
        </>
    )
}

export default Product;
