import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ResearchList from '../components/research-list'

const ResearchIndex = ({ data }) => {
  const posts = data.allContentfulResearch.nodes

  return (
    <Layout>
      <ResearchList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulResearch(sort: { order: ASC, fields: contentful_id }) {
      nodes {
        slug
        title
        publishDate
        heroImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 800)
          resize(height: 1000, width: 800) {
            src
          }
        }
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
export default ResearchIndex
