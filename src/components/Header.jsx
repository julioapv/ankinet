import { useState } from "react";
import { Logo } from "./Logo";
import { Link, Route, Routes, useRoutes, NavLink} from 'react-router-dom'
import { Home } from "../pages/Home";
import { Decks } from "../pages/Decks";
import { Account } from "../pages/Account"
import { FAQ } from "../pages/FAQ";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    
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
                    <ul className={`"md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb:12 absolute z-[-1] md:z-auto left-0 w-full transition-all shadow-md  bg-white duration-500 ease-in" ${openNavBar ? 'top-12' : 'top-[-490px]'}`}>
                        <li className="my-7 md:my-0 md:ml-8">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="my-7 md:my-0 md:ml-8">
                            <Link to="/Decks">Decks</Link>
                        </li>

                        <li className="my-7 md:my-0 md:ml-8">
                            <Link to="/faq">FAQ</Link>
                        </li>

                        <li className="my-7 md:my-0 md:ml-8">
                            <Link to="/Account">Account</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export { Header };