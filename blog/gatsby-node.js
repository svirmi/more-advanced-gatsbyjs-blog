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
        url: api_url
    });

    console.log(result.data);

    const myData = {
        title: "Double quoted title field",
        description: "Double quoted description field",
        key: 123,
        foo: `The foo field of my node`,
        bar: `Baz`
    };

    const newNode = {
        ...myData,
        id: createNodeId(`my-data-${myData.key}`),
        internal: {
            type: 'TestNode',
            contentDigest: createContentDigest(myData)
        }
    };

    actions.createNode(newNode);
};
