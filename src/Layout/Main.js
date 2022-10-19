import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';
import Header from '../Componets/Header/Header';
export const ProductContext = createContext([])
export const CartContext = createContext([])
const Main = () => {
    const {products, initialCart} = useLoaderData()
    const [cart, setCart] = useState(initialCart)
    return (
        <div>
            <ProductContext.Provider value={products}>
                <CartContext.Provider value={[cart, setCart]}>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </CartContext.Provider>
            </ProductContext.Provider>
        </div>
    );
};

export default Main;