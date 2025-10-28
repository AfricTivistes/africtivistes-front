const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const programmes = await graphql(`
    {
      allWpProgramme(sort: {fields: date}) {
      nodes {
        link
        slug
        terms: programme{
            etiquette
          }
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
        lang: node.language.slug,
        tags: node.terms.etiquette
      },
    })
  })

  const allPostsFR = await graphql(`
    {
    allWpPost(
      filter: {
          language: {code: {eq: FR}}
         
          }
    ){
      totalCount
      nodes {
        link
        title
        id
        slug
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        featuredImage {
          node {
            altText
            sourceUrl
            localFile {
              publicURL
              absolutePath
              base
              childImageSharp {
                gatsbyImageData(
                  width: 800,
                  height: 400,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            slug
            name
            description
          }
        }
        author {
          node {
            name
            firstName
            lastName
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        language {
          slug
        }
      }
    }
  }
  `).then(res => res.data)




  const allPostsEN = await graphql(`
  {
    allWpPost(
      filter: {
          language: {code: {eq: EN}}
         
          }
    ){
      totalCount
      nodes {
        link
        title
        id
        slug
        date(formatString: "DD MMMM, YYYY", locale: "en")
        excerpt
        featuredImage {
          node {
            altText
            sourceUrl
            localFile {
              publicURL
              absolutePath
              base
              childImageSharp {
                gatsbyImageData(
                  width: 800,
                  height: 400,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            slug
            name
            description
          }
        }
        author {
          node {
            name
            firstName
            lastName
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        language {
          slug
        }
      }
    }
  }
`).then(res => res.data)

  // Fonction pour créer les pages pour chaque catégorie
  const createCategoryPages = (posts, lang, perPage) => {
    const categories = new Map();

    // Pour l'anglais, utiliser 'blog-en' au lieu de 'blog'
    const blogSlug = lang === 'en' ? 'blog-en' : 'blog';
    
    // Toujours ajouter la catégorie blog pour chaque langue, même si elle n'existe pas dans WordPress
    categories.set(blogSlug, { 
      slug: blogSlug, 
      name: lang === 'fr' ? 'Blog' : 'Blog', 
      description: lang === 'fr' 
        ? 'La rubrique blog est un espace de libre expression pour la communauté panaricaine de AfricTivistes. Elle accueille des billets d\'opinion, des analyses, des retours d\'expérience et des contributions autour de la citoyenneté, de la démocratie, de la participation citoyenne, de la gouvernance et de l\'innovation sociale, entre autres thématiques.' 
        : 'The Blog section is a space for free expression for the Pan-African community of AfricTivistes. It welcomes opinion pieces, analyses, experiences, and contributions around citizenship, democracy, civic participation, governance, and social innovation, among other themes.', 
      posts: [] 
    });

    // Regrouper les posts par catégorie (plus efficace avec Map)
    posts.forEach(post => {
      const postCategories = post.categories && post.categories.nodes ? post.categories.nodes : [];
      if (postCategories.length === 0) {
        return; // Ignorer les posts sans catégorie
      }
      
      postCategories.forEach(({ slug, name, description }) => {
        // Pour l'anglais, regrouper les articles de la catégorie 'blog' sous 'blog-en'
        const targetSlug = (lang === 'en' && slug === 'blog') ? 'blog-en' : slug;
        
        if (!categories.has(targetSlug)) {
          categories.set(targetSlug, { slug: targetSlug, name, description, posts: [] });
        }
        categories.get(targetSlug).posts.push(post);
      });
    });

    // Préparer la liste des catégories pour la sidebar (slug, name, postsLength)
    const sidebarCategories = Array.from(categories.values()).map(cat => ({
      slug: cat.slug,
      name: cat.name,
      postsLength: Array.isArray(cat.posts) ? cat.posts.length : 0,
    }));

    // Créer les pages pour chaque catégorie
    for (const [slug, category] of categories) {
      const categoryName = category.name; 
      const categoryDescription = category.description;
      const postsInCategory = category.posts;
      
      // Configuration spéciale pour la catégorie blog (contribution) - pour 'blog' et 'blog-en'
      const isBlogCategory = slug === 'blog' || slug === 'blog-en';
      const articlesPerPage = isBlogCategory ? 9 : perPage;
      const numPages = Math.max(1, Math.ceil(postsInCategory.length / articlesPerPage)); // Toujours au moins 1 page

      Array.from({ length: numPages }).forEach((_, i) => {
        const currentPage = i + 1;
        // Ne PAS inclure le préfixe de langue - gatsby-plugin-react-intl le fait automatiquement
        const basePath = currentPage === 1 ? `/${slug}` : `/${slug}/${currentPage}`;
        const skip = i * articlesPerPage;
        const paginatedPosts = postsInCategory.slice(skip, skip + articlesPerPage);
        // Utiliser le template dédié sans sidebar pour la catégorie blog (blog et blog-en)
        const templatePath = isBlogCategory
          ? "./src/templates/contribution.js"
          : "./src/templates/category.js";

        createPage({
          path: basePath,
          component: path.resolve(templatePath),
          context: {
            category: slug,
            categoryName: categoryName,
            categoryDescription: categoryDescription,
            lang: lang,
            posts: paginatedPosts,
            totalPages: numPages,
            currentPage: currentPage,
            categoryNames: sidebarCategories,
          },
        });
      });
    }
  }

  // Créer les pages pour les catégories pour chaque langue
  const totalPerPage = 6
  createCategoryPages(allPostsFR.allWpPost.nodes, "fr", totalPerPage);
  createCategoryPages(allPostsEN.allWpPost.nodes, "en", totalPerPage);

  // Créer les pages individuelles d'articles avec le template moderne
  const createArticlePages = (posts, lang) => {
    posts.forEach(node => {
      const categories = node.categories ? node.categories.nodes.map(category => category.name) : [];
      const tags = node.tags ? node.tags.nodes.map(tag => tag.name) : [];
      const categorySlugs = node.categories ? node.categories.nodes.map(category => category.slug) : [];
      
      // Créer la page d'article moderne seulement pour les articles du blog
      // Note: Les articles du blog ont le slug de catégorie 'blog' pour français et 'blog-en' pour anglais
      const isBlogArticle = categorySlugs.includes('blog') || categorySlugs.includes('blog-en');
      if (isBlogArticle) {
        // Ne PAS inclure le préfixe de langue - gatsby-plugin-react-intl le fait automatiquement
        const blogPath = lang === 'en' ? `/blog-en/${node.slug}` : `/blog/${node.slug}`;
        createPage({
          path: blogPath,
          component: path.resolve(`./src/templates/article-detail.js`),
          context: {
            slug: node.slug
          },
        })
      }
      
      // Créer l'ancien template pour tous les autres articles
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.slug,
          lang: lang,
          categories,
          tags,
        },
      })
    })
  }

  // Créer les pages d'articles pour chaque langue
  createArticlePages(allPostsFR.allWpPost.nodes, "fr");
  createArticlePages(allPostsEN.allWpPost.nodes, "en");
}