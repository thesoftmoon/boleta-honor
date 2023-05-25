import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <div>
        <NavBar />
        <div>{children}</div>
        <Footer />
    </div>
  )
}

export default MainLayout