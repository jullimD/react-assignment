import React, { useEffect } from "react";
// import Profile from "./Profile";
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd';
import Profile from "./Profile";
import { fetchUsersSuccess, fetchUsersFailure, resetState } from "../Actions/users";

const Profiles = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)


    useEffect(() => {
        dispatch(resetState())

        fetch('https://6581584a3dfdd1b11c4303db.mockapi.io/users', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then((response) => response.json()).then(users => {
            // Do something with the list of tasks
            dispatch(fetchUsersSuccess(users));
          }).catch(error => {
            // handle error
            dispatch(fetchUsersFailure(error));
            
          })

    }, [dispatch]);

    // console.log(users)
    return (
    <div className="ml-20">
        <Row className="ma pt-20">
            {users.map((user) =>
                 
                <Col span={8} key={user.id}>
                  <Profile user={user}/>   
                </Col>
            )}            
            
        </Row>
    </div>
    )
}





export default Profiles;

