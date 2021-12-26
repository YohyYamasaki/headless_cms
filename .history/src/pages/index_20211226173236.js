import React from 'react'
import { graphql } from 'gatsby'
import yuto from '../pics/54499.jpg'
import Layout from '../components/layout'
import styled from 'styled-components'

import Container from '../components/container'
import Seo from '../components/seo'
import Hero from '../components/hero'
import * as styles from '../components/article-preview.module.css'

const RootIndex = ({ data }) => {
  const posts = data.allContentfulGeneral.nodes

  const YutoImage = styled.img`
    max-width: 300px;
    padding: 30px 40px;
    float: left;

    @media (max-width: 600px) {
      margin: 0 auto;
      max-width: 300px;
    }
  `

  const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 25px;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  `

  const news = posts[1]

  return (
    <Layout>
      <div className={styles.layout}>
        <Container className={styles.container}>
          <div>
            <Seo title="About" />
            <Hero title={posts[0].title} />
            <div className={styles.container2}>
              <Wrapper>
                <YutoImage src={yuto} />

                <div
                  className={styles.body}
                  dangerouslySetInnerHTML={{
                    __html: posts[0].info?.childMarkdownRemark?.html,
                  }}
                />
              </Wrapper>
            </div>
          </div>
        </Container>

        <Container className={styles.container}>
          <div>
            <Hero title={news.title} />
            <div className={styles.container2}>
              <Wrapper>
                <div className={styles.article}>
                  <div
                    className={styles.body}
                    dangerouslySetInnerHTML={{
                      __html: news.info?.childMarkdownRemark?.html,
                    }}
                  />
                </div>
              </Wrapper>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulGeneral(sort: { order: ASC, fields: contentful_id }) {
      nodes {
        slug
        title
        info {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
export default RootIndex
