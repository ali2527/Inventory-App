import React from 'react'
import "./card.css"
import {Card , Row , Col} from 'antd'

export default function CardComponent({styles, children}) {
  return (

    <Row  className='signinMain'>
        <Col xs={24} sm={24} md={12} >
            <Card className="authCard" style={styles}>
                {children}
            </Card>
        </Col>
    </Row>
    )
}

