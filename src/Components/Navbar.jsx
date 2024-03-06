import React from "react"
import Logo from "../Assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import menuBarButton from "../Assets/menubutton.svg";

const Navbar = () => {
    return(
        <div className="bg-[#ffffff] shadow-navbar">
            <div className=" w-11/12 mx-auto flex justify-between h-18 items-center ">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="hidden lg:flex items-center gap-14">
                    <div className="flex gap-6 text-[#0F1629] font-semibold">
                        <ul>
                            <NavLink to={"#"}>
                                Crypto Taxes
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to={"#"}>
                                Free Tools
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink to={"#"}>
                                Resource Center
                            </NavLink>
                        </ul>
                    </div>

                    <button className=" text-white btn-gradient px-4 py-2 rounded-lg font-semibold text-lg">
                        Get Started
                    </button>
                </div>
                <div className="flex lg:hidden">
                    <div className="w-full h=full">
                        <img src={menuBarButton} alt="menu" className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;