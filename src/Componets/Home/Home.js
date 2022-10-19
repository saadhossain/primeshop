import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import banner1 from '../../assests/primeshop-banner-1.jpg'
import banner2 from '../../assests/primeshop-banner-2.jpg'
import banner3 from '../../assests/primeshop-banner-3.jpg'
import { CartContext, ProductContext } from '../../Layout/Main';
import { addToLocalDB } from '../../Utility/LocalDB';
import HomeProducts from './HomeProducts';
const Home = () => {
    const products = useContext(ProductContext);
    const featuedProduct = products.slice(0, 8);
    const newProducts = products.slice(8, 12)
    const offerProducts = products.slice(12, -1)
    const [cart, setCart] = useContext(CartContext)
    //Handle Add to cart
    const handleAddToCart = (product) => {
        let newCart = []
        const existing = cart.find(existingProduct => existingProduct.id === product.id)
        if(!existing){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            const remaining = cart.filter(existingProduct => existingProduct.id !== product.id)
            existing.quantity = existing.quantity + 1;
            newCart = [...remaining, existing];

        }
        setCart(newCart);
        addToLocalDB(product.id)
        toast.success('Product Added to Cart', {autoClose:500})
    }

    return (
        <div>
            {/* Featured Products Section */}
            <img src={banner1} alt="summer offer" />
            <h1 className='text-2xl md:text-3xl font-bold text-center py-2 md:py-5'>Featured Products</h1>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-2 md:my-5'>
                {
                    featuedProduct.map(feature => <HomeProducts key={feature.id} product={feature} handleAddToCart={handleAddToCart}></HomeProducts>)
                }
            </div>
            {/* New Products Section */}
            <img src={banner3} alt="New Collection"/>
            <h1 className='text-2xl md:text-3xl font-bold text-center py-2 md:py-5'>New Arrieved</h1>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-2 md:my-5'>
                {
                    newProducts.map(feature => <HomeProducts key={feature.id} product={feature} handleAddToCart={handleAddToCart}></HomeProducts>)
                }
            </div>
            {/* Offer Section */}
            <img src={banner2} alt="Offer"/>
            <h1 className='text-2xl md:text-3xl font-bold text-center py-2 md:py-5'>GET UPTO 30% Discount</h1>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-2 md:my-5'>
                {
                    offerProducts.map(feature => <HomeProducts key={feature.id} product={feature} handleAddToCart={handleAddToCart}></HomeProducts>)
                }
            </div>
        </div>
    );
};

export default Home;