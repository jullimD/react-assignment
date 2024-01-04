import React, { useEffect, useState } from 'react';
import { Anchor, Row, Col, ConfigProvider } from 'antd';



const AnchorTab = () => {

    const [targetOffset, setTargetOffset] = useState();

    // useEffect(()=> {
    //   setTargetOffset()
    // })

    return (
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(255 255 255)"
        },

      }}
      >
      <div  >

        <Col span={4}>

        <Anchor className='w-screen p-3 left-0 top-0 right-0 bg-lime-500 text-white'
        offsetTop={71}
        targetOffset={110}
        direction='horizontal'
        
        items={[
          {
            key: 'about-sect',
            href: '#about-sect',
            title: 'About',
          },
          {
            key: 'roles-sect',
            href: '#roles-sect',
            title: 'Roles',
          },
          {
            key: 'skills-sect',
            href: '#skills-sect',
            title: 'Skills',
          },
          {
            key: 'lang-sect',
            href: '#lang-sect',
            title: 'Language',
          },
          {
            key: 'proj-sect',
            href: '#proj-sect',
            title: 'Projects and Experiences',
          },
          {
            key: 'assign-sect',
            href: '#assign-sect',
            title: 'Assignments',
          },
        ]}
      />
      </Col>
      </div>

</ConfigProvider>
      
        

    )
}


export default AnchorTab