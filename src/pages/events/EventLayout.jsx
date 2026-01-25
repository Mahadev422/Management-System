import React from 'react'
import { Outlet } from 'react-router-dom';

const EventLayout = () => {
  return (
    <>
      <div>EventLayout</div>
      <Outlet />
    </>
    
  )
}

export default EventLayout;