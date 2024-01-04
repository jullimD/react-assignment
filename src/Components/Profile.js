import React from 'react'
import { Card, Image, Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { NavLink} from 'react-router-dom';

const { Meta } = Card; 
const Profile = ({user}) => {

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
        <NavLink to={"/user/" + user} className="margin flex justify-around w-fit">  
            <Card
                hoverable
                className="card my-3 hover:bg-slate-50"
                bordered={true}
                style={{
                width: 500,
                display: 'flex',
                alignItems: 'flex-end'
                }}
            >
                <Meta 
                avatar={<Avatar shape="square" size={64} src={user.avatar} />}
                title={user.firstname + " " + user.lastname}
                description={<p>Card Content</p>}
                />
            </Card>
      </NavLink>
    )
}

export default Profile;