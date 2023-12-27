import React from "react";
import { useParams, Link } from "react-router-dom";
import FirstName from "./UserPage/FirstName";
import LastName from "./UserPage/LastName";
import Email from "./UserPage/Email";
import About from "./UserPage/About";
import Roles from "./UserPage/Roles";
import Languages from "./UserPage/Languages";
import Skills from "./UserPage/Skills";
import ProjectsExperiences from "./UserPage/Projects and Experiences";
import Assignments from "./UserPage/Assignments";
import ProfilePic from "./UserPage/ProfilePic";

const UserPage = () => {
    const {id} = useParams();

    console.log(id);
    return (
    
    <div>
        <Link to="/">Go Home</Link>
        <p>User: {id} </p>
        <ProfilePic />
        <FirstName />
        <LastName />
        <Email />
        <About />
        <Roles />
        <Languages />
        <Skills />
        <ProjectsExperiences />
        <Assignments />


    </div>
    )

}

export default UserPage;