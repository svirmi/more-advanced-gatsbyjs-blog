import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
          fluid(maxWidth: 700, maxHeight: 500) {
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

    <Layout>
        <SEO title="Articles" />
        <h1>Articles</h1>

            { data.allArticle.nodes.map(article => (

                <Card key={article.id}>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <Img fluid={article.localImage.childImageSharp.fluid} />
                    <CardBody>
                        <CardTitle>{article.title}</CardTitle>
                        <CardSubtitle>{article.summary}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>

            ))}
    </Layout>
</>