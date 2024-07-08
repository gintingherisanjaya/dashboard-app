import React, { useState, useEffect } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Card, Button } from 'antd';
import axios from 'axios'

const { Meta } = Card;
const defaultImage = {
  url: '/img/not-available.jpg',
  style: {
    width: '100%',
    height: 'auto',
  }
}

export default function ServicesCards({ url }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`https://api.microlink.io/?url=${url.url}`).then(response => {
            setData(response.data.data)
        }).catch(error => {
            console.error('axios@ServicesCards.error : ', error.message)
            console.error('error.description : ', error)
        })
    }, [url])

  return (
    <Card
    loading={!data}
    style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }}
    className="card-image"
    cover={
        <img
            alt="example"
            src={url.src ? url.src : data?.image ? data?.image?.url : defaultImage.url }
            style={url.style ? url.style : data?.image ? { width: '80px', height: '80px', margin: '10px auto' } : defaultImage.style } 
        />
    }
    actions={[
      <Button style={{ width: '90%' }} type='primary' onClick={() => window.location.href = url.url } > Go to page<LogoutOutlined key="out" /> </Button>,
      <Button style={{ width: '90%', backgroundColor: 'gray', color: 'white' }} > About </Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={data?.logo?.url ? data?.logo?.url : defaultImage.url } />}
      title={data?.title ? data?.title : 'Not Available'}
      description={<span style={{ fontSize: '9px', color: 'black' }}>{data?.description}</span>}
    />
  </Card>
  )
}
