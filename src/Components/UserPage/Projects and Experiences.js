import React from "react";
import { Card, Flex } from "antd";

const ProjectsExperiences = ({projexp}) => {
    return (
        <Flex id="proj-sect" justify="center" className="p-5">
        <Card title="Projects and Experiences" bordered={true} className="grow">
        <p>{projexp}</p>

        </Card>
        </Flex>
    )
}

export default ProjectsExperiences