import React from "react";
import { Card, Flex } from "antd";

const Roles = ({roles}) => {
    return (
        <Flex id="roles-sect" justify="center" className="p-5">
        <Card title="Roles" bordered={true} className="grow">
        <p>{roles}</p>

        </Card>
        </Flex>
    )
}

export default Roles