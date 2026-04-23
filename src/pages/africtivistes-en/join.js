import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import AdhererPage from '../africtivistes/adherer'

const Join = ({ data }) => (
  
<IntlContextConsumer>
    {({ language: currentLocale }) => 
        currentLocale === 'en' && <AdhererPage data={data} />
    }
  </IntlContextConsumer>
  )

export default Join

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "join"}}) {
    nodes {
      title
      content
      translations {
        link
      }
    }
  }
  contact: allWpPage(filter: {slug: {eq: "contact-us"}}) {
    nodes {
      title
      content
      slug
      link
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 555,
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
      translations {
        link
      }
    }
  } 
}
`
