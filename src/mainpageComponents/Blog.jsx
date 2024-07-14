import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div>
            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Latest Blogs</h3>
                        </div>
                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first blog' />
                                    <div className='blog-content'>
                                        <p className='date'>15/06/2023</p>
                                        <h5 className='title'>Handweaved cloths</h5>
                                        <p className='desc'>Beautiful handweaved cloths are now for sales at your best price</p>
                                        <Link className='button' to={"/"}>READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first blog' />
                                    <div className='blog-content'>
                                        <p className='date'>15/06/2023</p>
                                        <h5 className='title'>Handweaved cloths</h5>
                                        <p className='desc'>Beautiful handweaved cloths are now for sales at your best price</p>
                                        <Link className='button' to={"/"}>READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first blog' />
                                    <div className='blog-content'>
                                        <p className='date'>15/06/2023</p>
                                        <h5 className='title'>Handweaved cloths</h5>
                                        <p className='desc'>Beautiful handweaved cloths are now for sales at your best price</p>
                                        <Link className='button' to={"/"}>READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='blog-card'>
                                <div className='card-image'>
                                    <img src="/Images/handweaving.jpg" className='img-fluid' alt='first blog' />
                                    <div className='blog-content'>
                                        <p className='date'>15/06/2023</p>
                                        <h5 className='title'>Handweaved cloths</h5>
                                        <p className='desc'>Beautiful handweaved cloths are now for sales at your best price</p>
                                        <Link className='button' to={"/"}>READ MORE</Link>
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

export default Blog
