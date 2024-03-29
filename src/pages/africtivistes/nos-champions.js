import * as React from "react"
import { graphql } from "gatsby"
import NosChampions from '../../components/noschampions'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from '../../components/pageBanner'
import CallAction from "../../components/callAction"
import{FormattedMessage} from 'react-intl'


const ChampionsPage = ({data}) => {
  const championsTextStyles = {
    fontSize: '18px', // Définition de la taille de police à 16 pixels
    // Autres styles souhaités
  };
    const { title, translations} = data.allWpPage.nodes[0]
    const link = translations ? translations[0].link : ''
    return (<Layout translation={link}>
        <Seo title="Comment adhérer AfricTivistes ?" />
        <PageBanner title={title} />
        <div class="row justify-content-center">
    <div class="col-lg-8">
        <div class="section-title text-center pt-10 pb-10">
            <p class="text-center" style={championsTextStyles}><FormattedMessage id="championsText"/></p>
            <div class="underline">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</div>

        <NosChampions posts={data.allWpPost.edges} />
        <CallAction contacts={data.contact.nodes}/>
      </Layout>
    )
}
export default ChampionsPage

export const query = graphql`
query {

  allWpPage(filter: {slug: {eq: "nos-champions"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpPost(
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "nos-championnes"}}}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        link
        featuredImage {
          node {
            altText
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 400,
                  height: 350,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            count
          }
        }
      }
    }
  }
  contact: allWpPage(filter: {slug: {eq: "nous-contacter"}}) {
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