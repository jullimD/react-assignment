import React from "react";
import { Card, Flex } from "antd";

const Assignments = ({assignments}) => {
    return (
        <Flex id="assign-sect" justify="start" className="p-5">
        <Card title="Assignments" bordered={true} className="grow" >
        <p>{assignments}</p>

        </Card>
        </Flex>
    )
}

export default Assignments