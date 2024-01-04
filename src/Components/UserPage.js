import React , { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import About from "./UserPage/About";
import Roles from "./UserPage/Roles";
import Languages from "./UserPage/Languages";
import Skills from "./UserPage/Skills";
import ProjectsExperiences from "./UserPage/Projects and Experiences";
import Assignments from "./UserPage/Assignments";
import ProfilePic from "./UserPage/ProfilePic";
import AnchorTab from "./UserPage/AnchorTab";
import { fetchUsersId } from "../Actions/users";



const UserPage = () => {
    const {id} = useParams();

    // console.log(id);
    const dispatch = useDispatch();
    const user = useSelector((state) => console.log(state))


    
    useEffect(() => {
        const fetchData = async () => {
            try {
              dispatch(fetchUsersId(id));
            } catch (error) {
              console.error("Error fetching user:", error);
            }
        
          };
    fetchData();
    }, [dispatch,id]);
    // console.log(user)
    // console.log(user)
    console.log(`User: ${user}`)
    
    return (
    <div>
            
            <AnchorTab/>
        <div className="grid grid-cols-5 grid-flow-col pt-20 h-60" > 
            <div className="col-start-1 col-span-2">
                <ProfilePic user={user[id]}/>
                {/* <ProfilePic name={`${user.firstname} ${user.lastname}`}
                email={user.email} avatar={user.avatar} */}
                {/* /> */}
            </div>
            <div className="col-start-3 col-span-3 pr-40" >
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