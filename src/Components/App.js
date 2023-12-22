import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import Header from "./Header";
import Profiles from "./Profiles";
import UserPage from "./UserPage";
import NotFound from "./NotFound";

const App = (props) => {

    const [users, setUsers] = useState(props.Users)

    return (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Profiles users={users}/>}/>
                <Route path='/user/:id' element={<UserPage />}/>
                <Route path='*' element={<NotFound />} />
            </Routes> 
        </div>
    </BrowserRouter>
        
    )
};


App.defaultProps = {
    Users : ["1","2","3","4",'5','6','7','8','9',"10","hi","12",'13','14','15']
    
}


export default App;