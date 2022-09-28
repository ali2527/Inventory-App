import React, { Children } from 'react'
import './layout.css'
import {Layout} from 'antd'

export default function AuthLayout({children}) {
  return (
    <Layout className="signinLayout">
        {children}
    </Layout>

  )
}
