import React from 'react'
import Header from './Header'
import Offers from './Offers'
import SideBarMenu from './SideBarMenu'

const AuthenticatedWrapper = () => {
  return (
    <>
      <div className='authenticatedMainWrapper'>
          <div className='sidebarMenuWrapper'>
              <SideBarMenu />
          </div>
          <div className='authentictedContentWrapper'>
              <Header />
              <Offers />
          </div>
      </div>
    </>
  )
}

export default AuthenticatedWrapper
