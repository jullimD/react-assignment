import React from 'react'
import { Card, Image} from 'antd'
import { NavLink} from 'react-router-dom';

const Profile = (props) => {

    // const testClick = () => {
    //     console.log("clicked")
    // }
    
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
                className="card my-3 hover:bg-slate-50"
                bordered={true}
                title={<Image 
                width={100} height={100}
                src='error'
                /> }
                style={{
                width: 500,
                display: 'flex',
                alignItems: 'flex-end'
                }}
            >
                <div>
                <p>{props.user}</p>

                <p>Profile goes here</p>
                <p>Card Content</p>
                </div>
            </Card>
      </NavLink>
    )
}

export default Profile;