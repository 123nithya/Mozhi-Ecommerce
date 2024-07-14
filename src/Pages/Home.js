import React from 'react'
import CarouselFadeExample from '../mainpageComponents/Carousel'
import Categories from '../mainpageComponents/Categories'
import Blog from '../mainpageComponents/Blog'
import ProductsPage from '../mainpageComponents/ProductsPage'
import SpecialProducts from '../mainpageComponents/SpecialProducts'
import PopularProducts from '../mainpageComponents/PopularProducts'
import BigCard from '../mainpageComponents/BigCard'

function Home() {
    return (
        <div>
            <div className='home'>
                <CarouselFadeExample />
                <Categories />
                <ProductsPage />
                <BigCard />
                <SpecialProducts />
                <PopularProducts />
                <Blog />
            </div>
        </div>
    )
}

export default Home
