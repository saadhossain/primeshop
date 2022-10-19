import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })

    }
    return (
        <div className='bg-violet-500 py-2'>
            <div className='w-10/12 mx-auto flex justify-between items-center text-white'>
                <div>
                    <h1 className='text-2xl font-bold'>PrimeShop</h1>
                </div>
                <div>
                    <ul className='flex gap-5 font-semibold'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
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
                </div>
            </div>
        </div>
    );
};

export default Header;