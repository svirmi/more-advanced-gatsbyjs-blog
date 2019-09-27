import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
{
  allArticle {
    nodes {
      id
      alias
      summary
      title
      publishedAt
      domain {
        name
      }
      canonical {
        id
      }
      wam_id
      featuredImage {
        id
        imageUrl
      }
    }
    totalCount
  }
}
`
;

export default ({ data }) => <>
    <h1>Articles</h1>
    <ul>
        { data.allArticle.nodes.map(article => (
            <li key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <p>Published at {article.publishedAt}</p>
            </li>
        ))}
    </ul>
</>