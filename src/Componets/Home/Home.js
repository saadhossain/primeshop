import React, { useContext } from 'react';
import banner1 from '../../assests/primeshop-banner-1.jpg'
import banner2 from '../../assests/primeshop-banner-2.jpg'
import banner3 from '../../assests/primeshop-banner-3.jpg'
import { ProductContext } from '../../Layout/Main';
import HomeProducts from './HomeProducts';
const Home = () => {
    const products = useContext(ProductContext);
    const featuedProduct = products.slice(0, 8);
    const newProducts = products.slice(8, 12)
    const offerProducts = products.slice(12, -1)
    console.log(featuedProduct);
    return (
        <div>
            {/* Featured Products Section */}
            <img src={banner1} alt="summer offer" />
            <h1 className='text-2xl md:text-3xl font-bold text-center py-2 md:py-5'>Featured Products</h1>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-2 md:my-5'>
                {
                    featuedProduct.map(feature => <HomeProducts key={feature.id} product={feature}></HomeProducts>)
                }
            </div>
            {/* New Products Section */}
            <img src={banner3} alt="New Collection"/>
            <h1 className='text-2xl md:text-3xl font-bold text-center py-2 md:py-5'>New Arrieved</h1>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-2 md:my-5'>
                {
                    newProducts.map(feature => <HomeProducts key={feature.id} product={feature}></HomeProducts>)
                }
            </div>
            {/* Offer Section */}
            <img src={banner2} alt="Offer"/>
            <h1 className='text-2xl md:text-3xl font-bold text-center py-2 md:py-5'>GET UPTO 30% Discount</h1>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-2 md:my-5'>
                {
                    offerProducts.map(feature => <HomeProducts key={feature.id} product={feature}></HomeProducts>)
                }
            </div>
        </div>
    );
};

export default Home;