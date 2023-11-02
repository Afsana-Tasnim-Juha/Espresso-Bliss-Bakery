import { NavLink } from "react-router-dom";
import logo1 from '../assets/logo1.png';
import nav from '../assets/nav.jpg';


const NavBar = () => {

    const navStyle = {
        backgroundImage: `url(${nav})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100px', // Set a minimum height for the container

    };
    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Career">Login</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100 " style={navStyle}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <img className="w-[100px]" src={logo1} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default NavBar;