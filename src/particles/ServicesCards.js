import React, { useState, useEffect } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Card, Button } from 'antd';
import axios from 'axios'

const { Meta } = Card;

export default function ServicesCards({ url }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`https://api.microlink.io/?url=${url}`).then(response => {
            setData(response.data.data)
            console.log(response.data.data)
        }).catch(error => {
            console.error(error)
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
    cover={
        <img
            alt="example"
            src={data?.image.url}
            style={{ width: '80px', height: '80px', margin: '10px auto' }}
        />
    }
    actions={[
      <Button style={{ width: '90%' }} type='primary' onClick={() => window.location.href = url } > Go to page<LogoutOutlined key="out" /> </Button>,
    ]}
  >
    <Meta
      avatar={<Avatar src={data?.logo.url} />}
      title={data?.title}
      description={<span style={{ fontSize: '9px' }}>{data?.description.slice(0, 100).concat('...')}</span>}
    />
  </Card>
  )
}
