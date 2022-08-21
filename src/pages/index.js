// Import React
import React from 'react'

// Import Layout
import Layout from 'layouts/layout'

// Import Libraries
import is from 'is_js'
import loadable from '@loadable/component'

// Import Modifiers
// import getValue from 'modifiers/getValue'
/*****************/
/**  Loadables  **/
/*****************/

const Components = {
  // Loadable Blocks
  panels: loadable(() => import( `blocks/panels` )),
  hero: loadable(() => import( `blocks/hero` )),

}

const seo = {
  url : '/',
  title: 'Welcome',
  description: 'DJEddieG bringing all you need for your celebrations',
}

const Index = () => {

  // const Panels = Components['panels']
  const Hero = Components['hero']

  return (
    <Layout
      simple = { true }
      // { ...layout }
      seo = { seo }
    >
      <Hero/>
    </Layout>
  )

}

export default Index