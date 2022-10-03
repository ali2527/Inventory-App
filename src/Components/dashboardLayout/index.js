import React, { Children } from 'react'
import './dashboardlayout.css'
import {Layout} from 'antd'

export default function DashboardLayout({children}) {
  return (
    <Layout className="dashboardLayout">
        {children}
    </Layout>

  )
}