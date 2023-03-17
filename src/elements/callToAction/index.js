// Link picker between Link and a elements
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/

// Import React
import React from 'react'

// Import Libraries
import is from 'is_js'
import { Link as GatsbyLink} from 'gatsby'

//Iimport Modifiers
import classy from 'modifiers/classy'

// Import elements
import {Link} from 'elements'

const CallToAction = props => {

  // Stuff happens here
  const {
    label = false,
    to = false,
    children = false,
    className = false,
    type = 'secondary'
  } = props

  const ctaClasses = classy([
    'button',
    'cta-button',
    className && className,
    type === 'primary' && 'primary is-red'
  ])

   return ( Boolean( label ) || Boolean( children ) ) && Boolean(to) ?
   <Link
   { ...ctaClasses }
    to={to}>
      { children || label}
    </Link>
   : null

}

export default CallToAction
