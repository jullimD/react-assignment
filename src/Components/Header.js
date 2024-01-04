import React from "react";
import logo from '../images/Del.png'
import { Link } from "react-router-dom";


const Header = () => {




    return (
        <div className="header">
            {/* <h1 className="fixed z-10 top-0 left-0 right-0 text-7xl bg-black text-white pl-3 pt-2 pb-2">
            </h1> */}
            <div className="fixed z-10 top-0 left-0 right-0 text-7xl bg-black text-white pl-3 pt-2 pb-2">
             
             <Link to={"/"} className="block w-fit"style={{}}>
            <img src={logo} alt="Del" height={250} width={250}/></Link>
            </div>  
            
            
        </div>
    )
}
export default Header;