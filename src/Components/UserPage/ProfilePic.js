import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Card, Flex, Avatar } from "antd";
import { useParams } from "react-router";


const { Meta } = Card; 

const ProfilePic = () => {
    const {id} = useParams()
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
             avatar={<Avatar shape="square" size={84} icon={<UserOutlined />} 
             
             className="-pb-25"
             />}
             title={id}
             description={"Email here"}
             className="pb-5"
             />
            </Card>
        </Flex>
    )
}

export default ProfilePic