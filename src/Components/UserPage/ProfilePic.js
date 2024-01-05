import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Card, Flex, Avatar } from "antd";
import { useParams } from "react-router";


const { Meta } = Card; 

const ProfilePic = ({name,email,avatar}) => {
    // const {id} = useParams()
    // console.log(user);

    return (
        <Flex className="row-span-3 pt-5 pl-12" justify="center">
            <Card bordered={true} style={{ 
                    width: 350,
                    height: 150,
                    display: 'flex',
                    alignItems: 'flex-end'
                    }}
                    className=""
                    >
             <Meta 
             avatar={<Avatar shape="square" size={84} src={avatar}
             className="-pb-25"
             />}
             title={name}
             description={email}
             className="pb-5"
             />
            </Card>
        </Flex>
    )
}

export default ProfilePic