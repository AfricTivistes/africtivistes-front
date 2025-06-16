import React from 'react'
import { graphql } from "gatsby"

import IndexPage from './index'

const Home = ({data}) => (
  <IndexPage data={data}/>
)

export const pageQuery = graphql`
query {
  allWpPage(filter: {slug: {eq: "home"}, language: {code: {eq: EN}}}) {
    nodes {
      title
      translations {
        link
      }
      link
    }
  }
  allWpProgrammeType (
    filter: {language: {code: {eq: EN}}}
  ) {
    nodes {
      id
      name
      slug
    }
  }
  allWpProgramme(
    filter: {language: {code: {eq: EN}}}
    sort: {fields: date, order: DESC}
    ) {
    nodes {
      id
      title
      link
      date(formatString: "DD MMMM, YYYY", locale: "en")
      programmeTypes {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 360, 
                height: 250, 
                placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      slug
      content
    }
  }
  programmeencours: allWpProgramme(
    filter: {language: {code: {eq: EN}}}
    limit: 4
    sort: {fields: date, order: DESC}
    ) {
    nodes {
      id
      title
      link
      date(formatString: "DD MMMM, YYYY", locale: "en")
      programmeTypes {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 360, 
                height: 250, 
                placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      slug
      content
    }
  }
  programmeencoursExceptThree: allWpProgramme(
    filter: {language: {code: {eq: EN}}}
    limit: 4
    skip: 4
    sort: {fields: date, order: DESC}
    ) {
    nodes {
      id
      title
      link
      date(formatString: "DD MMMM, YYYY", locale: "en")
      programmeTypes {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 300, 
                height: 280,
                placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      slug
      content
    }
  }

  communiques :  allWpPost(
  sort: {fields: [date], order: DESC},
  limit: 3
  filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "releases"}}}}}

  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "en")
        excerpt
        slug
        language {
          slug
        }
        link
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1500,
                  height: 1200,
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
nodes {

  slug
  language {
    slug
  }
}
}

latestnews: allWpPost(
  limit: 3
  skip: 3
  sort: {fields: [date], order: DESC}
  filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "news"}}}}}

   ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "en")
        excerpt
        slug
        language {
          slug
        }
        link
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1500,
                  height: 1200,
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
nodes {

  slug
  language {
    slug
  }
}
}
allWpPost(
sort: {fields: [date], order: DESC},
 limit: 3
 filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "news"}}}}}

 ) {
  edges {
    node {
      id
      title
      date(formatString: "DD MMMM, YYYY", locale: "en")
      excerpt
      slug
      language {
        slug
      }
      link
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1500,
                height: 1200,
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
nodes {

slug
language {
  slug
}
}
}
allStickyPosts: allWpPost(
    sort: {fields: [date], order: DESC},
     limit: 3
     filter: {language: {code: {eq: EN}}, isSticky: { eq: true }}

     ) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMMM, YYYY", locale: "en")
          excerpt
          slug
          language {
            slug
          }
          link
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1920,
                    height: 800,
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
  nodes {

    slug
    language {
      slug
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
abidjan: allWpPage(filter: {slug: {eq: "speech-by-cheikh-fall-abidjan2021"}, language: {code: {eq: EN}}}) {
  nodes {
    title
    translations {
      link
    }
    link
    content
  }
}
sommet: allWpPage(filter: {slug: {eq: "sommit-africtivistes"}, language: {code: {eq: EN}}}) {
  nodes {
    title
    content
    link
    translations {
      link
    }
  }
}
rapports: allWpPost(
  sort: {fields: date, order: DESC},
  limit: 3
  filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "our-publications"}}}}}
) {
  edges {
    node {
      id
      title
      date(formatString: "DD MMMM, YYYY", locale: "en")
      excerpt
      link
      featuredImage {
        node {
          altText
          big: localFile {
            childImageSharp {
              gatsbyImageData(
                width: 550,
                height: 300,
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

champions: allWpPost(
  sort: {fields: date, order: DESC},
  limit: 3
  filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "our-champions"}}}}}
) {
  edges {
    node {
      id
      title
      date(formatString: "DD MMMM, YYYY", locale: "en")
      excerpt
      link
      featuredImage {
        node {
          altText
          big: localFile {
            childImageSharp {
              gatsbyImageData(
                width: 550,
                height: 300,
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

learn: allWpPost(
  sort: {fields: date, order: DESC}
  filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "learn-with-africtivistes-en"}}}}}
) {
  edges {
    node {
      id
      title
      date(formatString: "DD MMMM, YYYY", locale: "en")
      excerpt
      link
      featuredImage {
        node {
          altText
          big: localFile {
            childImageSharp {
              gatsbyImageData(
                width: 550,
                height: 300,
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
   latestNewsExceptThree: allWpPost(
    limit: 3
    skip: 6
    sort: {fields: [date], order: DESC}
    filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "news"}}}}}

    ) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMMM, YYYY", locale: "fr")
          excerpt
          content
          slug
          language {
            slug
          }
          link
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1500,
                    height: 1200,
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
  nodes {

    slug
    language {
      slug
    }
  }
 }
  plateforme: allWpPlateforme {
    nodes {
      id
      title
      slug
      uri
      plateforme {
        url
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300, height: 300, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
}   
`

export default Home
