import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { SiSellfy } from "react-icons/si";
import { BiGitCompare } from "react-icons/bi";

const Header = () => {
    return (
        <div>
            <header className='header-top-strip py-1'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <Link>
                                <img
                                    // className='d-block w-70'
                                    style={{ height: 70 }}
                                    src="/Images/mozhi.png"
                                    alt='mozhi'
                                />
                            </Link>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input type="text" className="form-control py-2" placeholder="search product here..." aria-label="search product here..." aria-describedby="basic-addon2" />
                                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className="header-upper-links d-flex  justify-content-between align-items-center">
                                <div>
                                    <Link to={"/compare"} className='d-flex align-items-center gap-10 text-white'>
                                        <BiGitCompare size={25} />
                                        <p className="mb-0">Compare <br /> Products</p>
                                    </Link>
                                </div>&nbsp;&nbsp;
                                <div>
                                    <Link to={"/wishlist"} className='d-flex align-items-center gap-10 text-white'>
                                        <BsFillHeartFill size={25} />
                                        <p className="mb-0">Favorite</p>
                                    </Link>
                                </div>&nbsp;&nbsp;
                                <div>
                                    <Link to={"/seller"} className='d-flex align-items-center gap-10 text-white'>
                                        <SiSellfy size={25} />
                                        <p className="mb-0">Seller</p>
                                    </Link>
                                </div>&nbsp;&nbsp;
                                <div>
                                    <Link to={"/login"} className='d-flex align-items-center gap-10 text-white'>
                                        <BsFillPersonPlusFill size={30} />
                                        <p className="mb-0">SignIn <br /> SignUp</p>
                                    </Link>
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    <Link to={"/cart"} className='d-flex align-items-center gap-10 text-white'>
                                        <BsCart4 size={30} />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>Add Cart</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12"></div>
                        <div className="menu-bottom d-flex align-items-center gap-30">
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsFillGrid3X3GapFill color='#43355E' size={20} />
                                        <span className='me-5 d-inline-block' style={{ color: '#43355E' }}>Shop Catogories</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Another action</Link></li>
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Something else here</Link></li>
                                        <li><Link className="dropdown-item " style={{ color: '#D8B34E' }} to="" >Action</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className="d-flex align-items-center gap-15" >
                                    <NavLink to="/" style={{ color: '#43355E' }}>Home</NavLink>
                                    <NavLink to="/store" style={{ color: '#43355E' }}>Our Store</NavLink>
                                    <NavLink to={'/blogs'} style={{ color: '#43355E' }}>Blogs</NavLink>
                                    <NavLink to={"/contact"} style={{ color: '#43355E' }}>Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header
