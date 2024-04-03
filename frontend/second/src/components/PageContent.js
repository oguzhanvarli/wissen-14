import React from 'react'
import About from './About'
import MenuSection from './MenuSection'
import Contact from './Contact'

const PageContent = () => {
  return (
    <div className="w3-content" style={{ maxWidth: 1100 }}>
      <About />
      <MenuSection />
      <Contact/>
    </div>
  )
}

export default PageContent