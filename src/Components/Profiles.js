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
            {/* <Col span={8}>
            <Card title={props.users[0]} className="card1 hover:bg-slate-50" bordered={true}>
                Card content
            </Card>
            </Col>
            <Col span={8}>
            <Card title={props.users[0]} className="card1 hover:bg-slate-50" bordered={true}>
                Card content
            </Card>
            </Col>
            <Col span={8}>
            <Card title="Card title" bordered={true}>
                Card content
            </Card>
            </Col>
            <Col span={8}>
            <br/>
            <Card title="Card title" bordered={true}>
                Card content
            </Card>
            </Col> */}
        </Row>
    </div>)
}





export default Profiles;

