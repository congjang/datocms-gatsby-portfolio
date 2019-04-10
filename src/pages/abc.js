import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const AbcPage = ({ data: { abc } }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{abc.title}</h1>
        <div className="sheet__gallery">
          <Img fluid={abc.def.fluid} />
        </div>
      </div>
    </article>
  </Layout>
)

export default AbcPage

export const query = graphql`
  query AbcQuery {
    abc: datoCmsAbc {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      def {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      
    }
  }
`
