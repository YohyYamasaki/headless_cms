import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
const Template = (props) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Template
