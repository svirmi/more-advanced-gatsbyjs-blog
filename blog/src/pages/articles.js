import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

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

      localImage {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 350) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
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
                <Img fluid={article.localImage.childImageSharp.fluid} />
            </li>
        ))}
    </ul>
</>