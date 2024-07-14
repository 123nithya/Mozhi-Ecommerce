import React, { useState } from 'react';
import Meta from '../mainpageComponents/Meta';
import BreadCrumb from '../mainpageComponents/BreadCrumb';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { BiCart } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import ReactImageZoom from 'react-image-zoom';
import Color from '../mainpageComponents/Color';

const SingleProduct = () => {
    const props = {
        zoomWidth: 300,
        img: "https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    };

    const [orderedProduct, setOrderedProduct] = useState(true);

    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };

    return (
        <div>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img className='img-fluid' src='https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pot' />
                                </div>
                                <div>
                                    <img className='img-fluid' src='https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pot' />
                                </div>
                                <div>
                                    <img className='img-fluid' src='https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pot' />
                                </div>
                                <div>
                                    <img className='img-fluid' src='https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pot' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6' style={{ boxShadow: "0 0 15px #0e0e0e1a" }}>
                            <div className='main-product-details' style={{ marginTop: '-10%' }}>
                                <div className='border-bottom'>
                                    <h3 className='title' style={{ marginLeft: '-200px', textShadow: 'none' }}>Lorem ipsum dolor sit amet, apeirian iudicabit</h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>$ 100.00</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>(2 Reviews)</p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a Review</a>
                                </div>
                                <div className='py-3'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading'>Type : </h3>
                                        <p className='product-data'>Tea Pot</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading'>Brand : </h3>
                                        <p className='product-data'>Havells</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading'>Category : </h3>
                                        <p className='product-data'>Tea Pots</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading' >Tags : </h3>
                                        <p className='product-data' style={{ color: "#777777" }}>Tea Pots</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading' >Availability : </h3>
                                        <p className='product-data' style={{ color: "#777777" }}>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-20 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading' style={{ marginLeft: '-560px', marginTop: '-3px' }}>Size : </h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border border-2 bg-white text-dark border-secondary'>S</span>
                                            <span className='badge border border-2 bg-white text-dark border-secondary'>M</span>
                                            <span className='badge border border-2 bg-white text-dark border-secondary'>L</span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-20 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading' style={{ marginLeft: '-560px' }}>Color : </h3>
                                        <Color />
                                    </div>
                                    <div className='d-flex align-items-center gap-20 flex-row mt-2 mb-3'>
                                        <h3 className='product-heading'>Quantity : </h3>
                                        &nbsp;&nbsp;&nbsp;<div className=''>
                                            <input type='number' name='' className='form-control' min={1} max={10} style={{ width: '70px' }} id='' />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className='d-flex align-items-center gap-30'>
                                            <button className='button border-0' type='submit'>
                                                Add To Cart
                                            </button>
                                            <button className='button signup'>
                                                Buy It Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=''><BiGitCompare className='fs-5 me-2' />Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=''><BsFillHeartFill className='fs-5 me-2' />Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-3'>
                                        <h3 className='product-heading' style={{ marginLeft: '-475px' }}>Shipping & Returns: </h3>
                                        <p className='product-data' style={{ color: "#777777" }}>
                                            Free Shipping and returns available an all orders!<br />
                                            we ship all Indian domestic orders within <b>2-4 business days!</b>
                                        </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Product Link : </h3>
                                        <a href='javascript:void(0);' onClick={() => {
                                            copyToClipboard("https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
                                        }} style={{ marginTop: '-11px' }}
                                        >
                                            Copy Product Link.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3' style={{ boxShadow: "0 0 15px #0e0e0e1a" }}>
                                <p className='bg-white p-3'>Lorem ipsum dolor sit amet, apeirian iudicabit efficiendi te duo. Te malorum salutatus scripserit sea, eos deserunt mnesarchum at. Vel vituperata interesset referrentur et. Per ut assum petentium, ei vitae dolore nam. Per quodsi corrumpit disputando eu, ad sed maiorum adolescens, malorum persecuti quo id. Vis consul copiosae evertitur id, apeirian delicata has te, eam et vidit autem dolore. His id ferri illum ocurreret, semper quaestio expetenda vis ex.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='review' className='reviews-wrapper home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Reviews</h4>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='review-form py-4'>
                                    <h4>Write a Review</h4>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name='' id='' className='w-100 form-control' cols={80} rows={4} placeholder='Comments' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    {/* <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                    </div> */}
                    <h4>Similar Products</h4>
                    <div className='row'>
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

export default SingleProduct
