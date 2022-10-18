import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const { userRegister, emailVerify, updateDisplayName } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;
        userRegister(email, password)
            .then(result => {
                toast.success('Account Created Successful...', {autoClose:500})
                // const user = result.user;
                
                //Send verification email to the user
                emailVerify()
                .then(()=>{
                    toast.success('Verification link sent to your email', {autoClose:500})
                })
                //After register update display name
                updateDisplayName(name)
                    .then(() => { })
                //Reset Form after successfully Register
                form.reset()
            })
            .catch(err => {
                const msg = err.message;
                toast.error(msg, {autoClose:500})
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Register New Account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name="fullname" type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
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
                                    <Link to='/login' className="label-text-alt link link-hover">Already Have an Accunt? Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;