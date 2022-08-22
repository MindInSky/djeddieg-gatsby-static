/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
// Import React
import * as React from 'react'
import PropTypes from 'prop-types'

// Import Libraries
import is from 'is_js'

// Import Modifiers
import Seo from 'modifiers/seo'

// Import Layouts
import { Header, Footer } from 'layouts'

const Layout = props => {

  const { 
    seo = false,
    header = {},
    footer = {},
    children = false,
    simple = false,
  } = props

  return (
    <>
      <Seo { ...seo } />
      { ( is.not.empty( header ) || simple ) && <Header { ...header } />}
      <main>
        { children }
      </main>
      { ( is.not.empty( footer ) || simple ) && <Footer { ...footer } />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
