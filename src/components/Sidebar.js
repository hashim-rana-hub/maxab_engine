import React from 'react'
import SvgLogo from '../svgs/components/logo'
import SidebarMenuItem from './SidebarMenuItem'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <SvgLogo />
      </div>
      <div className='sidebar-items'>
          <SidebarMenuItem />
      </div>
    </div>
  )
}

export default Sidebar