import React from "react";
import { Card, Skeleton, Flex, Avatar } from "antd";

const { Meta } = Card;

const ProfilePic = ({ name, email, avatar, loading }) => {
  return (
    <Flex className="row-span-3 pt-5 pl-12" justify="center">
      <Card
        bordered={true}
        style={{
          width: 350,
          height: 150,
          display: "flex",
          alignItems: "flex-end",
        }}
        className=""
      >
        {loading ? (
          <Skeleton avatar active />
        ) : (
          <Meta
            avatar={
              <Avatar
                shape="square"
                size={84}
                src={avatar}
                className="-pb-25"
              />
            }
            title={name}
            description={email}
            className="pb-5"
          />
        )}
      </Card>
    </Flex>
  );
};

export default ProfilePic;