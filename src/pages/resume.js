import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ResumeList from '../components/resume-list'

const ResumeIndex = ({ data }) => {
  const posts = data.allContentfulResume.nodes

  return (
    <Layout>
      <ResumeList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulResume(sort: { order: ASC, fields: slug }) {
      nodes {
        slug
        title
        resumeList {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
export default ResumeIndex
