import React from 'react';

const HomeProducts = ({product, handleAddToCart}) => {
    const {picture, name, description, price} = product
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{name}</h2>
                    <p>{description}</p>
                    <h2 className="card-title text-lg">Price : ${price}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={()=> handleAddToCart(product)} className="btn btn-primary bg-[#018F9B] border-none hover:bg-[#018F9B]">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;