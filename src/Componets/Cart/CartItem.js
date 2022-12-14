import React from 'react';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ product , handleRemoveItem}) => {
    const {id, name, picture, price, quantity } = product;
    return (
        <div className='my-2 border-b py-2 border-white'>
            <div className='flex gap-3'>
                <img src={picture} alt={name} className='w-20 rounded' />
                <div className='w-full'>
                    <div className='flex justify-between text-xl font-semibold text-white'>
                        <h1>{name}</h1>
                        <h1>${price}</h1>
                    </div>
                    <div className='flex justify-between text-[#dfdfdf]'>
                        <p>Quantity: {quantity}</p>
                        <p>Total : ${price*quantity}</p>
                    </div>
                    <button onClick={() => handleRemoveItem(id)} className='text-[#fd003f] flex items-center gap-2'><FaTrash/> Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;