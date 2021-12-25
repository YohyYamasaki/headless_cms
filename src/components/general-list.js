import React from 'react'

import Container from './container'
import Seo from './seo'
import Hero from './hero'
import * as styles from './article-preview.module.css'

const GeneralList = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  return (
    <div className={styles.layout}>
      <Container className={styles.container}>
        {posts.map((post) => {
          return (
            <div>
              <Seo title={post.title} />
              <Hero title={post.title} />
              <div className={styles.container2}>
                <div className={styles.article}>
                  <div
                    className={styles.body}
                    dangerouslySetInnerHTML={{
                      __html: post.info?.childMarkdownRemark?.html,
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

export default GeneralList
