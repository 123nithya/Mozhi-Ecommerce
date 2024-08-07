import React, { useState } from 'react'
import BreadCrumb from '../mainpageComponents/BreadCrumb'
import Meta from '../mainpageComponents/Meta';
import ReactStars from 'react-rating-stars-component';
import Product from '../mainpageComponents/Product';
import Color from '../mainpageComponents/Color';

const OurStore = () => {
    const [grid, setGrid] = useState(4);

    return (
        <div>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter By</h3>
                                <div>
                                    <h5 className='sub-title'>Availability</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value={""} id='' />
                                            <label className='form-check-label' htmlFor="">In Stock(1)</label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value={""} id='' />
                                            <label className='form-check-label' htmlFor="">Out Of Stock(0)</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <Color />
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id="color-1" />
                                            <label className='from-check-label' htmlFor='color-1'>S (2)</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id="color-2" />
                                            <label className='from-check-label' htmlFor='color-2'>M (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Product Tags</h3>
                                <div>
                                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Headphone
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Laptop
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Mobile
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Random Products</h3>
                                <div>
                                    <div className='random-product mb-3 d-flex'>
                                        <div className='w-50'>
                                            <img src='/Images/macreme-2.jpeg' className='img-fluid' alt='' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b style={{ marginLeft: '6px', color: 'white' }}>$ 300</b>
                                        </div>
                                    </div>
                                    <div className='random-product d-flex'>
                                        <div className='w-50'>
                                            <img src='/Images/macreme-2.jpeg' className='img-fluid' alt='' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b style={{ marginLeft: '6px', color: 'white' }}>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 d-block' style={{ width: '100px' }}>Sort By:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproducts mb-0'>21 Product</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img
                                                onClick={() => {
                                                    setGrid(3);
                                                }}
                                                src="/Images/menu3.png" className='d-block img-fluid' alt='grid' />
                                            <img
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                src="/Images/Menu1.png" className='d-block img-fluid' alt='grid' />
                                            <img
                                                onClick={() => {
                                                    setGrid(6);
                                                }}
                                                src="/Images/menu-4.png" cxlassName='d-block img-fluid' alt='grid' />
                                            <img
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                src="/Images/menu2.png" className='d-block img-fluid' alt='grid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='products-list pb-5'>
                                <div className='gap-10 flex-wrap' style={{ display: 'flex' }}>
                                    <Product grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStore;
