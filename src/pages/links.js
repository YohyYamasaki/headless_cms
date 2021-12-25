import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import LinksList from '../components/links-list'

const LinksIndex = ({ data }) => {
  const posts = data.allContentfulLinks.nodes

  return (
    <Layout>
      <LinksList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulLinks(sort: { order: ASC, fields: slug }) {
      nodes {
        slug
        title
        links {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
export default LinksIndex
