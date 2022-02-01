const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const posts = await graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then(res => res.data)

  posts.allWpPost.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      },
    })
  })

  const programmes = await graphql(`
    {
      allWpProgramme(sort: {fields: date}) {
      nodes {
        link
        slug
        language {
          slug
        }
      }
    }
  }
  `).then(res => res.data)

  programmes.allWpProgramme.nodes.forEach(node => {
    createPage({
      path: `/programme/${node.slug}`,
      component: path.resolve(`./src/templates/programme-detail.js`),
      context: {
        slug: node.slug,
        lang: node.language.slug
      },
    })
  })

  const actualites = await graphql(`
    {
      allWpPost(
        filter: {language: {code: {eq: FR}}}
      ){
        totalCount
      }
    }
  `).then(res => res.data)

  const total = actualites.allWpPost.totalCount
  const perPage = 6
  const numPages = Math.ceil(total / perPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/fr/actualites` : `/fr/actualites/${i + 1}`,
      component: path.resolve(`./src/templates/actualites.js`),
      context: {
        limit: perPage,
        skip: i * perPage,
        numPages,
        currentPage: i + 1,
      },
    })
  }
  )
}