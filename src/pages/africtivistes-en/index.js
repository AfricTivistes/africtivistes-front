import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import AfrictivistesPage from '../africtivistes'

const Africtivistes = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) =>
      currentLocale === 'en' && <AfrictivistesPage data={data} />
    }
  </IntlContextConsumer>
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "africtivistes-en"}}) {
    nodes {
      title
      content
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
  allWpTeam {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 89,
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
      social {
        facebook
        instagram
        linkedin
        twitter
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
  valeurs: allWpPage(filter: {slug: {eq: "values"}}) {
    nodes {
      link
    }
  }
  histoire: allWpPage(filter: {slug: {eq: "history"}}) {
    nodes {
      link
    }
  }
}
`

export default Africtivistes