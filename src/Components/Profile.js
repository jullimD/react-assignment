import React from 'react'
import { Card} from 'antd'
import { NavLink, Link } from 'react-router-dom';

const Profile = (props) => {

    // const testClick = () => {
    //     console.log("clicked")
    // }
    console.log(props.user)
    return (
        // <div class="flex justify-around" to="/user">
        //     <Card hoverable title={props.user}  className="card my-3 hover:bg-slate-50" bordered={true}
        //     style={{
        //         width: 500,
        //     }}><p>Profile goes here</p>
        //         <p>Card Content</p>
            
        //     </Card>
        // </div>
        <NavLink to={"/user/" + props.user} className="flex justify-around">
            <Card
                hoverable
                title={props.user}
                className="card my-3 hover:bg-slate-50"
                bordered={true}
                style={{
                width: 500,
                }}
            >
                <p>Profile goes here</p>
                <p>Card Content</p>
            </Card>
      </NavLink>
    )
}

export default Profile;