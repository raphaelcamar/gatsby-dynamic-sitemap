module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:9000/",
    title: "Dynamic sitemap",

  },
  plugins: [
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        url: 'https://calendarific.com/api/v2/holidays',
        method: 'get',
        entityLevel: 'response.holidays',
        headers: {
          'Content-Type': 'application/json',
          'api_key':'8d5fb055f09266640d6eca133948a4c85c706c1b'
        },
        typePrefix: 'internal__',
        name: 'posts',
        params: {
          country: 'BR',
          year: 2021,
          api_key: '8d5fb055f09266640d6eca133948a4c85c706c1b'
        },
        verboseOutput: true
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      // options: {
      //   query: `
      //     {
      //       site {
      //         siteMetadata {
      //           siteUrl
      //         }
      //       }
      //       allSitePage {
      //         edges {
      //           node {
      //             path
      //             context {
      //               lastmoddate
      //             }
      //           }
      //         }
      //       }
      //     }`,
      //   serialize: ({site, allSitePage}) =>
      //     allSitePage.edges.map(edge => {
      //       return {
      //         url: site.siteMetadata.siteUrl + edge.node.path,
      //         lastmod: null
      //       }
      //     })
      // }
    },
  ],
};
