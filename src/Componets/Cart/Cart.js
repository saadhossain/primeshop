import React, { useContext} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from '../../Layout/Main';
import { deleCartFromLocal, removeFromLocalDB } from '../../Utility/LocalDB';
import CartItem from './CartItem';

const Cart = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/shop'

    //Set Place order button disabled
    const [cart, setCart] = useContext(CartContext)
    //Handle Removed From Cart
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromLocalDB(id)
        toast.error('Item Removed From Cart', { autoClose: 500 })
    }

    //Handle Place order
    const handlePlaceOrder = () => {
        console.log('order placed');
        deleCartFromLocal()
        setCart([]);
        navigate(from, {replace: true})
        toast.success('Order Placed', {autoClose:500})
    }
    //Calculte total Price 
    let total = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
    }

    return (
        <div className='w-11/12 md:w-2/5 mx-auto my-10 bg-[#018F9B] rounded-lg p-10'>
            <div>
                {
                    cart.length ? <>
                        <h2 className='text-xl font-bold text-white'>Review Cart Items</h2>
                        {cart.map(product => <CartItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></CartItem>)}
                        <div className='border-y-2 border-[#018F9B] my-5 py-5 text-right'>
                            <h2 className='text-xl font-semibold text-white'>Total Price : ${total}</h2>
                            <h2 className='text-[#dfdfdf]'>Not Including TAX and Shipping Cost</h2>
                        </div>
                        <div className='flex mt-5 gap-2 justify-center'>
                            <Link to='/shop'><button className='flex mx-auto mt-5 bg-white py-2 px-3 rounded text-[#018F9B] font-bold duration-300'>Continue Shopping</button></Link>
                            <Link to='/orders'><button onClick={handlePlaceOrder} className='flex mx-auto mt-5 bg-white py-2 px-3 rounded text-[#018F9B] font-bold duration-300 ease-in-out border hover:border-white hover:text-white hover:bg-transparent'>Place Order</button></Link>
                        </div>
                        
                    </> : <>
                        <h1 className='text-3xl font-bold text-center text-white'>No Product In  Cart</h1>
                        <h1 className='text-xl font-bold text-center text-white'>First Add some products...</h1>
                        <Link to='/shop'><button className='flex mx-auto mt-5 bg-white py-2 px-3 rounded text-[#018F9B] font-bold duration-300 ease-in-out border hover:border-white hover:text-white hover:bg-transparent'>Back to Shop</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Cart;