/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

console.log(process.env.WAW_API_URL);

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const myData = {
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
