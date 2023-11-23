import { useState } from "react";
import { Logo } from "./Logo";
import { Link, useRoutes, NavLink} from 'react-router-dom'
import { Home } from "../pages/Home";
import { Decks } from "../pages/Decks";
import { Account } from "../pages/Account"
import { FAQ } from "../pages/FAQ";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    
    let links = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "account",
            element: <Account /> 
        },
        {
            path: "decks",
            element: <Decks />
        },
        {
            path: "faq",
            element: <FAQ />
        }
    ])
    
    const activeStyle = "bg-purple-100 md:bg-white text-purple-500 font-bold";

    let [openNavBar, setOpenNavBar] = useState(false)
    
    return (
        <div className="shadow-md w-full fixed left-0">
            <div className="md:px-10 py-4 px-7 md:flex items-center justify-between">
                <div className="flex cursor-pointer items-center gap-2">
                    <Logo />
                    <h1 className="font-bold uppercase lg:text-4xl md:text-3xl text-2xl">Ankinet</h1>
                </div>

                <button 
                onClick={() => setOpenNavBar(!openNavBar)}
                className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {!openNavBar ? <Bars3Icon /> : <XMarkIcon />}
                </button>

                <nav className="flex">
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white shadow-md text-right md:shadow-none  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${openNavBar ? 'top-16' : 'top-[-490px]'}`}>
                        <li className="text-xl my-7 md:my-0 md:ml-8">
                            <NavLink 
                            to="/"
                            className={({ isActive }) =>
                            isActive ? `block p-4 ${activeStyle}` : "block p-4"
                            }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="text-xl my-7 md:my-0 md:ml-8">
                            <NavLink 
                            to="/Decks"
                            className={({ isActive }) =>
                            isActive ? `block p-4 ${activeStyle}` : "block p-4"
                            }
                            >
                                Decks
                            </NavLink>
                        </li>

                        <li className="text-xl my-7 md:my-0 md:ml-8">
                            <NavLink 
                            to="/faq"
                            className={({ isActive }) =>
                            isActive ? `block p-4 ${activeStyle}` : "block p-4"
                            }
                            >
                                FAQ
                            </NavLink>
                        </li>

                        <li className="text-xl my-7 md:my-0 md:ml-8">
                            <NavLink 
                            to="/Account"
                            className={({ isActive }) =>
                            isActive ? `block p-4 ${activeStyle}` : "block p-4"
                            }
                            >
                                Account
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export { NavBar };