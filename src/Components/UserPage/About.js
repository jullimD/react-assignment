import React from "react";
import { Card, Flex } from "antd";

const About = ({about}) => {
    return (
        
        <Flex id="about-sect" className="p-5" justify="start">
        <Card  title="About" bordered={true} className="flex-1">
        <p>{about}</p>
        </Card>
        </Flex>
        
        
        

        
    )
}

export default About