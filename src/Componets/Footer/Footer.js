import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#018F9B] text-white py-5 mt-10'>
            <div className='md:w-10/12 mx-auto'>
                <section className='md:flex justify-between gap-5 md:gap-10 ml-10 md:ml-0'>
                    {/* Compnay information */}
                    <div>
                        <h4 className='text-xl font-bold'>Company</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>About</li>
                            <li>Blogs</li>
                            <li>Careers</li>
                            <li>Affiliate</li>
                            <li>Partnership</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Policy</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Return & Refund Policy</li>
                            <li>Our Logistics</li>
                            <li>Payment Methods</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Importants</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>Become a Seller</li>
                            <li>Customer Care Center</li>
                            <li>Give us Feedback</li>
                            <li>Product Request</li>
                            <li>Offers/Discount</li>
                        </ul>
                    </div>
                </section>
                <section className='border-t border-white mt-5 text-center'>
                    <p className='py-2'>&copy; 2023, PrimeShop Online Shopping.</p>
                </section>
            </div>
        </div>
    );
};

export default Footer;