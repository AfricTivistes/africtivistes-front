// require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Africtivistes`,
    description: `Ligue Africaine des Blogueurs et Web activistes pour la Démocratie`,
    author: `@africtivistes`,
    email: [`info@africtivistes.org`],
    tels: ['(+221) 33 837 51 24'],
    adresse: 'Liberté 6 extention, Villa Numéro 263, Dakar - SENEGAL',
    siteUrl: `https://www.africtivistes.com/`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     prefix: `artists/` ,
    //     context: true,
    //     tags: true,
    //     maxResults: 50
    //   }
    // },
    {
      
        resolve: `gatsby-source-wordpress`,
        options: {
          url: `https://update.africtivistes.org/graphql`,
          
          // Configuration du schéma
          schema: {
            timeout: 180000, // Augmenté à 180 secondes pour donner plus de temps
            perPage: 5,      // Réduit davantage le nombre d'éléments par requête
            requestConcurrency: 2, // Réduit encore plus les requêtes concurrentes
          },
          
          // Gestion spécifique des médias
          type: {
            MediaItem: {
              localFile: {
                requestConcurrency: 2, // Réduit le traitement concurrent des images
                maxFileSizeBytes: 5242880, // Limite à 5MB par fichier
                excludeByMimeTypes: ['video/mp4', 'application/pdf'], // Exclut les formats problématiques
              },
            },
            // Filtrer les types de contenu problématiques
            //Post: {
            //  limit: 50, // Limite le nombre de posts traités
            //}
          },
          
          // Options HTML simplifiées
          html: {
            useGatsbyImage: false, // Désactive temporairement la conversion des images
            createStaticFiles: false, // Désactive la création de fichiers statiques
          },
          
          // Options de débogage
          debug: {
            graphql: {
              showQueryOnError: true,
              showQueryVarsOnError: true,
            },
            timeBuildSteps: true,
          },
          
          // Configurations par environnement
          presets: [
            {
              presetName: `DEVELOPPEMENT`,
              useIf: () => process.env.NODE_ENV === `development`,
              options: {
                develop: {
                  nodeUpdateInterval: 60000,
                  hardCacheMediaFiles: true,
                },
              },
            },
            {
              presetName: `PRODUCTION`,
              useIf: () => process.env.NODE_ENV === `production`,
              options: {
                production: {
                  hardCacheMediaFiles: true,
                },
              },
            },
          ],
          // Protection contre les erreurs
          verbose: true,
        },
      
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/asset/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/asset/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // Votre ID de mesure Google Analytics
        trackingIds: ["G-9579G1EGCX"],
        // Cette ligne est optionnelle mais recommandée
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // Cette ligne est également optionnelle mais recommandée
        pluginConfig: {
          // Met le script dans la tête du document
          head: true,
          // Respecte le paramètre Do Not Track
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`fr`, `en`],
        // language file path
        defaultLanguage: `fr`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: false,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: ["/js/"],
      },
    },
    `gatsby-plugin-netlify`
  ],
}
