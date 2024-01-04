import React, { useEffect } from "react";
// import Profile from "./Profile";
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd';
import Profile from "./Profile";
import { fetchUsers } from "../Actions/users";

const Profiles = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)


    useEffect(() => {
        dispatch(fetchUsers());

    }, [dispatch]);

    console.log(users)
    return (
    <div>

        {console.log("test")}
        <Row className="pt-20">
            {users.map((user) =>
                 
                <Col span={8} key={user.id}>
                  <Profile user={user}/>
                  {console.log("Works")}   
                </Col>
            )}            
            
        </Row>
    </div>
    )
}





export default Profiles;

