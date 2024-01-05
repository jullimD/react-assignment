import React from "react";
import { Card, Flex } from "antd";

const Languages = ({languages}) => {
    return (
        <Flex id="lang-sect" justify="center" className="p-5">
        <Card title="Languages" bordered={true} className="grow">
            <p>{languages}</p>

        </Card>
        </Flex>
    )
}

export default Languages