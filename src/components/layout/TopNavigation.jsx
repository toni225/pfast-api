// import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import * as userService from "../../services/user.service"
import {useEffect, useState} from "react";
import {onSignOut} from "../shared/function.shared";

const TopNavigation = () => {
    const [isLogin,setIsLogin] = useState(false)
    
    useEffect(()=> {
       try{
           const user = localStorage.getItem('user')
           if(user!==null){
               setIsLogin(true)
           }
       } catch (e) {
           setIsLogin(false)
       }
    },[])

    return(
        <>
            <nav className="border-gray-200 bg-[#0f0E17]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PFASt</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#0f0e17] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#0f0e17] dark:bg-[#0f0e17] md:dark:bg-[#0f0e17] dark:border-gray-700">
                            <li>
                                <NavLink to={'/'}
                                   className="block py-2 px-3 text-white bg-[#0f0e17] rounded md:bg-[#0f0e17] md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                   aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/myparking/2'}
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-[#0f0e17] md:hover:bg-[#0f0e17] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#0f0e17] dark:hover:text-white md:dark:hover:bg-[#0f0e17]">
                                    MyParking
                                </NavLink>
                            </li>
                            <li>
                                {!isLogin ?
                                    <NavLink
                                        to={'/login'}
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-[#0f0e17] md:hover:bg-[#0f0e17] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#0f0e17] dark:hover:text-white md:dark:hover:bg-[#0f0e17]"
                                    >Login</NavLink> :
                                    <NavLink
                                        to={'/account'}
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-[#0f0e17] md:hover:bg-[#0f0e17] md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#0f0e17] dark:hover:text-white md:dark:hover:bg-[#0f0e17]"
                                    >Account</NavLink>
                                }

                            </li>
                            {/*<button className="block text-gray-900" onClick={getUserInfo}>clikc</button>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopNavigation
