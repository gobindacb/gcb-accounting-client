import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li className='font-bold'><Link to='/'>HOME</Link></li>
        <li className='font-bold'><Link to='/blogs'>BLOGS</Link></li>
        <li className='font-bold'><Link to='/services'>SERVICES</Link></li>
        {
            user?.email ?
                <>

                    <li className='font-bold'><Link to='/addservice'>ADD SERVICE</Link></li>
                    <li className='font-bold'><Link to='/myreviews'>MY REVIEWS</Link></li>
                    <li className='font-bold'><Link onClick={handleLogOut}>LOG OUT</Link></li>
                    <li><p>{user?.email}</p></li>


                </>
                :
                <li className='font-bold'><Link to='/login'>LOGIN</Link></li>
        }

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><img src={logo} alt="gcb-accounting-logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Header;