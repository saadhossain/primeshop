import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext, ProductContext } from '../../Layout/Main';
import { addToLocalDB } from '../../Utility/LocalDB';
import Products from './Products';

const Shop = () => {
    const products = useContext(ProductContext)
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
        <div className='w-10/12 mx-auto py-10'>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    products.map(product => <Products key={product.id} product={product} handleAddToCart={handleAddToCart}></Products>)
                }
            </div>
        </div>
    );
};

export default Shop;