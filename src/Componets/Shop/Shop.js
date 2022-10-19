import React, { useContext } from 'react';
import { ProductContext } from '../../Layout/Main';
import Products from './Products';

const Shop = () => {
    const products = useContext(ProductContext)
    console.log(products);
    return (
        <div className='w-10/12 mx-auto py-10'>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Shop;