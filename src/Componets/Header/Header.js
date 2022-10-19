import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../assests/logo.png'
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'
import { CartContext } from '../../Layout/Main';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useContext(CartContext);

    const [expand, setExpand] = useState(false)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })

    }
    return (
        <div className='bg-[#018F9B] py-2 border-b border-white md:sticky top-0 z-10'>
            <div className='w-10/12 mx-auto flex justify-between items-center text-white'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={logo} alt="Primeshop logo" className='w-12'/>
                    <h1 className='text-2xl font-bold'>PrimeShop</h1>
                </Link>
                <div className='flex gap-3 items-center'>
                    <ul className={`md:flex gap-5 bg-[#018F9B] py-2 px-10 font-semibold absolute md:static duration-300 ease-in-out ${expand ? 'top-16 right-0' : 'top-[-200px] right-0'}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/cart'>Cart<sup>{cart.length}</sup></Link></li>
                        {/* Show user email addrss if user logged in */}
                        {
                            user?.uid && <>
                            <li><Link to='/orders'>Orders</Link></li>
                            <li><Link to='/profile'>{user.displayName}</Link></li>
                            </>
                        }
                        {/* Show Logout button if user logged in otherwise show login button */}
                        {
                            user?.uid 
                            ? <li><Link onClick={handleLogOut}>Logout</Link></li>
                            : <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                    <div onClick={()=> setExpand(!expand)} className='md:hidden'>
                        {
                            expand ? <GrClose/> : <FaBars></FaBars>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;