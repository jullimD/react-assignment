import React from "react";
import logo from '../images/Del.png'

const Header = () => {

    return (
        <div className="header">
            <h1 className="text-7xl bg-black text-white left-padding pl-5 pt-2 pb-2">
            <img src={logo} alt="Del" height={250} width={250}/>  
            </h1>
        </div>
    )
}
export default Header;