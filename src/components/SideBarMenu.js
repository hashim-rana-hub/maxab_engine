import React from 'react'
import MaxabLogo from '../svgs/components/logo'
import SidebarMenuItem from './SidebarMenuItem'

const SideBarMenu = () => {
  return (
    <div className='sidebar'>
      <div>
        <MaxabLogo />
      </div>
      <div>
        <SidebarMenuItem />
      </div>
    </div>
  )
}

export default SideBarMenu
