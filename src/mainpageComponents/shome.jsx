import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

const shome = () => {
    return (
        <div>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner-content position-relative p-3'>
                                <img src='' alt='' className='img-fluid-rounded-3' />
                                <div className='small-banner-content position-absolute'>
                                    <h4>Supercharged for pros</h4>
                                    <h5>ipad s13+ pro.</h5>
                                    <p>from $999.0</p>
                                    <Link className='button'>Buy now</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                <div className='main-banner-content position-relative p-3'>
                                    <img src='' alt='' className='img-fluid-rounded-3' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Supercharged for pros</h4>
                                        <h5>ipad s13+ pro.</h5>
                                        <p>from $999.0</p>
                                        <Link className='button'>Buy now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='servies d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="" alt='services' />
                                    <div>
                                        <h6>lorem10</h6>
                                        <p className='mb-0'>jfsoadjfoshf</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="" alt='services' />
                                    <div>
                                        <h6>lorem10</h6>
                                        <p className='mb-0'>jfsoadjfoshf</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="" alt='services' />
                                    <div>
                                        <h6>lorem10</h6>
                                        <p className='mb-0'>jfsoadjfoshf</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="" alt='services' />
                                    <div>
                                        <h6>lorem10</h6>
                                        <p className='mb-0'>jfsoadjfoshf</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="" alt='services' />
                                    <div>
                                        <h6>lorem10</h6>
                                        <p className='mb-0'>jfsoadjfoshf</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='' alt='' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='' alt='' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='' alt='' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='marque-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper bg-white card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='' alt='' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default shome
