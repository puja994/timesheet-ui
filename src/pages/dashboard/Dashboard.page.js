import React from 'react'
import { DefaultLayout } from '../../components/layout/DefaultLayout'
import {DashboardDisplay} from '../../components/dashboard/DashboardDisplay'

export const Dashboard = () => {
  return (
    <DefaultLayout>
      <DashboardDisplay />
    </DefaultLayout>
  )
}

