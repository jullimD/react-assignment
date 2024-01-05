import React from "react";
import { Card, Flex } from "antd";

const Skills = ({skills}) => {
    return (
        <Flex id="skills-sect" justify="center" className="p-5">
        <Card title="Skills" bordered={true} className="grow">
        <p>{skills}</p>

    </Card>
    </Flex>
    )
}

export default Skills