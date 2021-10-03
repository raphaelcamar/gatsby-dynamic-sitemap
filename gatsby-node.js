const path = require('path');

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allInternalPosts {
        edges {
          node {
            name
            date {
              datetime {
                year
                month
                day
              }
            }
          }
        }
      }
    }
  `)

  result.data.allInternalPosts.edges.forEach(({node}, index) => {
    createPage({
      component: path.resolve('./src/pages/holidays.js'),
      path: '/holidays/' + index,
      context: {
        holiday: node
      }
    });
  });
}
