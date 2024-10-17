import React, { useState } from "react";
import pic from "../assets/user.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-2">
            <img src={pic} className="h-auto w-[50px] rounded-full" />
            <h1 className="text-xl font-bold cursor-pointer">
              Bittu <p className="text-sm font-medium">web developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-3">
              <li className="text-md font-semibold hover:scale-125 duration-75">
                <Link to="Home" smooth={true} duration={500} offset={-70} activeClass="active">
                Home
                </Link>
              </li>
              <li className="text-md font-semibold hover:scale-125 duration-75">
              <Link to="About" smooth={true} duration={500} offset={-70} activeClass="active">
               About
                </Link>
              </li>
              <li className="text-md font-semibold hover:scale-125 duration-75">
              <Link to="Experiance" smooth={true} duration={500} offset={-70} activeClass="active">
                Experiance
                </Link>
              </li>
              <li className="text-md font-semibold hover:scale-125 duration-75">
              <Link to="Contact" smooth={true} duration={500} offset={-70} activeClass="active">
               Contact
                </Link>
              </li>
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoMdClose size={24} /> : <IoMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col items-center justify-center space-y-3 py-4">
              <li className="text-2xl cursor-pointer font-semibold hover:scale-125 duration-75">
              <Link to="Home" smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(!menu)} >
                Home
                </Link>
              </li>
              <li className="text-2xl cursor-pointer font-semibold hover:scale-125 duration-75">
              <Link to="About" smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(!menu)} >
                About
                </Link>
              </li>
              <li className="text-2xl cursor-pointer font-semibold hover:scale-125 duration-75">
              <Link to="Experiance" smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(!menu)} >
                Experiance
                </Link>         
              </li>
              <li className="text-2xl cursor-pointer font-semibold hover:scale-125 duration-75">
                <Link to="Contact" smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(!menu)} >
                Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
