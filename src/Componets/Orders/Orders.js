import React from 'react';

const Orders = () => {
    return (
        <div className='w-11/12 md:w-2/5 mx-auto my-10 bg-[#018F9B] rounded-lg p-10'>
            <div className='text-white text-center'>
                <h1 className='text-xl font-bold'>Your Order Placed Successfully...</h1>
                <h3 className='text lg font-semibold'>We are waiting for the payment of your Order</h3>
                <h1 className='text-xl font-bold'>018-XXX-XXXXX</h1>
                <p>Make Payment, to the Number Above and Send Order ID and bKash Transaction ID, to Confirm your Order.</p>
                <div className="card flex-shrink-0 mx-auto mt-5 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">bKash Transaction ID</span>
                            </label>
                            <input name="bkashTrx" type="text" placeholder="Transaction ID" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order ID</span>
                            </label>
                            <input name="orderID" type="text" placeholder="Order ID" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary bg-[#018F9B] border-none hover:bg-[#018F9B]">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Orders;