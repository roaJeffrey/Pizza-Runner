import React from 'react'
import Chart from '../ui/Chart'
import Dashboard from '../ui/Dashboard'
import Deposits from '../ui/Deposits'
import Orders from '../ui/Orders'
import Title from '../ui/tsx/Title'

export default function MainPage() {
  return (
    <div>
      <Chart />
      <Dashboard />
      <Deposits />
      <listItems />
      <Orders />
      <Title />
    </div>
  )
}
