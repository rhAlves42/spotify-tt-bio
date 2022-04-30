import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config: GatsbyConfig = {
  siteMetadata: {
    title: `spotify-tt-bio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UUID-UNDEFINED"
      }
    }, {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Montserrat\:100,400,600,900'
        ],
        display: 'swap'
      }
    }]
};

export default config;
