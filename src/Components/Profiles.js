import React from "react";
// import Profile from "./Profile";
import { Col, Row } from 'antd';
import Profile from "./Profile";

const Profiles = (props) => {

    // console.log(props);

    return (
    <div>
        <h3>Profiles here</h3>
        <Row>
            {props.users.map((user) => 
                <Col span={8} key={user}>
                  <Profile key={user} user={user}/>   
                </Col>
            )}            
            
        </Row>
    </div>)
}





export default Profiles;

