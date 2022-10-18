import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [successMsg, setSuccessMsg] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccessMsg('Login Successful...')
            form.reset()
        })
        .catch(err => {
            setErrorMsg(err.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Login to Your Account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <p className='text-green-600 px-5 mt-3'>{successMsg ? successMsg : ''}</p>
                        <p className='text-red-500 px-5 mt-3'>{errorMsg ? errorMsg : ''}</p>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter Password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Don't Have Account? Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;