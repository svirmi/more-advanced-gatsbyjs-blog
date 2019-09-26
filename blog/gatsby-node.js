/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`  // looking for .env.development file
});

const axios = require('axios');
const api_url = process.env.WAW_API_URL;

console.log(api_url);

// add data to Gtasby graphql data layer
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {

    const result = await axios({
        method: "GET",
        url: api_url,
        headers: {
            accept: 'application/json',
        },
    }).catch(error => {
        console.error(error.message);
    });

    const articles = result.data;

    articles.forEach(article => {
       article.wam_id = article.id;
       const node = {
           ...article,
           id: createNodeId(`Article-${article.id}`),
           internal: {
               type: 'Article',
               contentDigest: createContentDigest(article),
           }
       };

       actions.createNode(node);
    });
};
