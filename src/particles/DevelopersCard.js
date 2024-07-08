import React from 'react'
import { Card } from 'antd'

const { Meta } = Card;
const defaultImage = {
  src: '/img/face.png'
}

export default function DevelopersCard({data}) {
  return (
    <Card
    style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }}    
    cover={ <img alt="example" src={data.src ? data.src : defaultImage.src } style={{ borderRadius: '50%', width: '200px', height: '200px', margin: '10px auto' }}  /> }
    >
        <Meta
        title={data?.name}
        description={<span style={{ fontSize: '9px', color: 'black' }}>{data?.description}</span>}
        />
    </Card>
  )
}
