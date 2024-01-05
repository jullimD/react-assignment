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
import { fetchUsersIdSuccess, fetchUsersIdFailure } from "../Actions/users";



const UserPage = () => {
    const {id} = useParams();

    // console.log(id);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)


    
    useEffect(() => {
        window.scrollTo(0,0);
        fetch(`https://6581584a3dfdd1b11c4303db.mockapi.io/users/${id}`, {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then((response) => response.json()).then(users => {
            // Do something with the list of tasks
            dispatch(fetchUsersIdSuccess(users));
            // console.log(user);
          }).catch(error => {
            // handle error
            dispatch(fetchUsersIdFailure(error));
          })
    }, [dispatch,id]);
    // console.log(user)
    // console.log(user)
    // console.log(`User: ${user}`)
    
    return (
    <div>
            
            <AnchorTab/>
        <div className="grid grid-cols-5 grid-flow-col pt-20 h-60" > 
            <div className="col-start-1 col-span-2">
                {/* <ProfilePic /> */}
                <ProfilePic name={`${user.firstname} ${user.lastname}`}
                email={user.email} avatar={user.avatar} 
                />
            </div>
            <div className="col-start-3 col-span-3 pr-40" >
                <About about={user.about} />
                <Roles roles={user.roles}/>
                <Skills skills={user.skills}/>
                <Languages languages={user.languages}/>
                <ProjectsExperiences projexp={user.projexperiences}/>
                <Assignments assignments={user.assignments}/>

            </div>
            
        </div>
    </div>
    
    )

}

export default UserPage;