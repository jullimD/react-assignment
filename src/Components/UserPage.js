import React from "react";
import { useParams, Link } from "react-router-dom";
// import FirstName from "./UserPage/FirstName";
// import LastName from "./UserPage/LastName";

import About from "./UserPage/About";
import Roles from "./UserPage/Roles";
import Languages from "./UserPage/Languages";
import Skills from "./UserPage/Skills";
import ProjectsExperiences from "./UserPage/Projects and Experiences";
import Assignments from "./UserPage/Assignments";
import ProfilePic from "./UserPage/ProfilePic";
import AnchorTab from "./UserPage/AnchorTab";




const UserPage = () => {
    const {id} = useParams();

    // console.log(id);
    return (
    <div className=" ">
            
            <AnchorTab/>
            
        <div className="grid grid-cols-5 grid-flow-col pt-20 h-60" > 
            <div className="col-start-1 col-span-2">
                <ProfilePic id={id}/>
            </div>
            <div className="col-start-3 col-span-3 pr-40" style={{}}>
                <About />
                <Roles />
                <Skills />
                <Languages />
                <ProjectsExperiences />
                <Assignments />

            </div>
            
        </div>
    </div>
    
    )

}

export default UserPage;