import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Card, Flex, Avatar } from "antd";
import { useParams } from "react-router";


const { Meta } = Card; 

const ProfilePic = ({user}) => {
    // const {id} = useParams()
    // console.log(user);
    if (!user || Object.keys(user).length === 0) {
        // If user is undefined or an empty object, return some default content or null
        return null; // or return a loading state or default content
      }
    return (
        <Flex className="row-span-3 pt-5 pl-12" justify="center">
            <Card bordered={true} style={{ 
                    width: 300,
                    height: 150,
                    display: 'flex',
                    alignItems: 'flex-end'
                    }}
                    className=""
                    >
             <Meta 
             avatar={<Avatar shape="square" size={84} src={user.avatar}
             className="-pb-25"
             />}
             title={user.name}
             description={user.email}
             className="pb-5"
             />
            </Card>
        </Flex>
    )
}

export default ProfilePic