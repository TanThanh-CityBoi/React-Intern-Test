import React from 'react'
import {
  Outlet,
} from 'react-router-dom'


import TheHeader from './TheHeader'
import TheFooter from './TheFooter'



const TheContent = () => {

  return (
    <>
      <TheHeader></TheHeader>
      <Outlet></Outlet>
      <TheFooter></TheFooter>
    </>
  )
}

export default React.memo(TheContent)