import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProducts = () => {
    return (
        <div>
            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Special Products</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                            <div className='special-product-card'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src='/Images/pot.jpg' className='img-fluid' alt='copper pot' />
                                    </div>&nbsp;
                                    <div className='special-product-content'>
                                        <h5 className='brand'>Lorem ispum</h5>
                                        <h6 className='title'>Lorem ispum</h6>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor={'#ffd700'} />
                                        <p className='price'>
                                            <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0'><b>5</b>days</p>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>
                                            </div>
                                        </div>
                                        <div className='prod-count my-3'>
                                            <p>Products: 5</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <Link className='button'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mb-3'>
                            <div className='special-product-card'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src='/Images/pot.jpg' className='img-fluid' alt='copper pot' />
                                    </div>&nbsp;
                                    <div className='special-product-content'>
                                        <h5 className='brand'>Lorem ispum</h5>
                                        <h6 className='title'>Lorem ispum</h6>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor={'#ffd700'} />
                                        <p className='price'>
                                            <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0'><b>5</b>days</p>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>
                                            </div>
                                        </div>
                                        <div className='prod-count my-3'>
                                            <p>Products: 5</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <Link className='button'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mb-3'>
                            <div className='special-product-card'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src='/Images/pot.jpg' className='img-fluid' alt='copper pot' />
                                    </div>&nbsp;
                                    <div className='special-product-content'>
                                        <h5 className='brand'>Lorem ispum</h5>
                                        <h6 className='title'>Lorem ispum</h6>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor={'#ffd700'} />
                                        <p className='price'>
                                            <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0'><b>5</b>days</p>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>
                                            </div>
                                        </div>
                                        <div className='prod-count my-3'>
                                            <p>Products: 5</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <Link className='button'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mb-3'>
                            <div className='special-product-card'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src='/Images/pot.jpg' className='img-fluid' alt='copper pot' />
                                    </div>&nbsp;
                                    <div className='special-product-content'>
                                        <h5 className='brand'>Lorem ispum</h5>
                                        <h6 className='title'>Lorem ispum</h6>
                                        <ReactStars count={5} size={24} value={3} edit={false} activeColor={'#ffd700'} />
                                        <p className='price'>
                                            <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0'><b>5</b>days</p>
                                            <div className='d-flex gap-10 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>2</span>
                                            </div>
                                        </div>
                                        <div className='prod-count my-3'>
                                            <p>Products: 5</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <Link className='button'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SpecialProducts
