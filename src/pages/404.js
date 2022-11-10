// Import React
import React from 'react'

// Import Blocks
import { Hero } from 'blocks'

// Import Layout
import { Layout } from 'layouts'

// Import Libraries
// import is from 'is_js'

// Import Modifiers
// import getValue from 'modifiers/getValue'

const seo = {
  url : '/404',
  title: '404 Not Found',
  description: 'Nothing to see here, yet.',
}

const Index = () => {

  return (
    <Layout
      simple = { true }
      // { ...layout }
      seo = { seo }
    >
      <Hero
        title = 'Nothing to see here yet, the site is still under construction'
      />
    </Layout>
  )

}

export default Index
