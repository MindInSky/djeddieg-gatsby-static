// Importing sass files with globs
const globImporter = require( `node-sass-glob-importer` )

require("dotenv").config({
  path: `.env`,
})

// Set DEVELOPMENT_MODE if  gatsby cloud variables exist
process.env.DEVELOPMENT_MODE = ( process.env.NODE_ENV === `development` && !Boolean( process.env.GATSBY_CLOUD ) )

// Set PRODUCTION_MODE if we are building on gatsby cloud from master
process.env.PRODUCTION_MODE = ( process.env.NODE_ENV === `production` && Boolean( process.env.GATSBY_CLOUD ) )

const siteUrl = `https://www.djeddieg.com/`

let config = {
  siteMetadata: {
    title: `DJEddieJ`,
    description: `Booking, Drop Me A Line Today! Services Offered: DJ Eddie G is happy to meet with clients for a consultation before the big day. During this time together, you can discuss music options, timeline, bilingual MC services, and the do-not-play list. Proof of liability insurance can be provided.`,
    author: `MindInSky`,
    siteUrl,
  },
  // Trailing Slash
  // https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#pathprefix
  trailingSlash : `always`,
  // Flags
  // https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#flags
  // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
    // DEV_SST : false, // If needed turn on to fix SSR rendering issues
    PARALLEL_SOURCING: true,
    PARALLEL_QUERY_RUNNING : true,
  },
  plugins: [
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // Uploaded Images from the CMS
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/static/media/images`,
    //   },
    // },
    // New images without the CMS, StaticImage to be used with these
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-json`,
    // { // Generate data from json files
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/content/`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DJEddieG`,
        short_name: `DJEddieG`,
        start_url: `/`,
        background_color: `#000000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `##fbffec`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // Sass plugins
    {
      resolve: `gatsby-plugin-sass`, // Sass plugin to utilize .scss files
      options: {
        sassOptions: {
          importer: globImporter(), // Allow glob imports like .../**/*.scss
        }
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = config