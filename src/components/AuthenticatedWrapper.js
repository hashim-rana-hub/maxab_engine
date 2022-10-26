import React from 'react'
import Header from './Header'
import Offers from './Offers'
import Sidebar from './Sidebar'

const AuthenticatedWrapper = () => {
  return (
    <>
    <div className='authenticatedMainWrapper'>
        <div className='sidemenuWrapper'>
            <Sidebar />
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