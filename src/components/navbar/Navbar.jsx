import Link from 'next/link';
import React from 'react';
import MyLink from './MyLink';

const Navbar = () => {

    const navItems = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/apps",
            text: "Apps",
        },
        {
            path: "/installation",
            text: "Installation",
        },
        {
            path: "/dashboard",
            text: "Dashboard",
        },
        
    ]

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                </div>



                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-between gap-2 items-center">
                    {navItems.map((item, index) => (
                        // Client component
                        <MyLink key={index} href={item.path}>
                            {item.text}
                        </MyLink>
                    ))}

                </ul>
            </div>
            <div className="navbar-end">
                <Link href={'/'} className="btn btn-info">Contribute</Link>
            </div>
        </div>
    );
};

export default Navbar;