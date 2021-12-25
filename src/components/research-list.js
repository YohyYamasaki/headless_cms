import React from 'react'

import Container from './container'
import Seo from '../components/seo'
import Hero from '../components/hero'
import * as styles from './article-preview.module.css'

const ResearchList = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  return (
    <div className={styles.layout}>
      <Container className={styles.container}>
        {posts.map((post) => {
          return (
            <div>
              <Seo title="Research" />
              <Hero
                image={post.heroImage?.gatsbyImageData}
                title={post.title}
              />
              <div className={styles.container}>
                <span className={styles.meta}>
                  <time dateTime={post.rawDate} className={styles.publishDate}>
                    {post.publishDate}
                  </time>
                </span>
                <div className={styles.article}>
                  <div
                    className={styles.body}
                    dangerouslySetInnerHTML={{
                      __html: post.body?.childMarkdownRemark?.html,
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default ResearchList
