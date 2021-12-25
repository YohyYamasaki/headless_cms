// import React from 'react'
// import { Link, graphql } from 'gatsby'
// import get from 'lodash/get'

// import Seo from '../components/seo'
// import Layout from '../components/layout'
// import Hero from '../components/hero'
// import Tags from '../components/tags'
// import * as styles from './blog-post.module.css'

// class BlogPostTemplate extends React.Component {
//   render() {
//     const post = get(this.props, 'data.contentfulArticle')
//     const previous = get(this.props, 'data.previous')
//     const next = get(this.props, 'data.next')

//     return (
//       <Layout location={this.props.location}>
//         <Seo title={post.title} />
//         <Hero image={post.heroImage?.gatsbyImageData} title={post.title} />
//         <div className={styles.container}>
//           <span className={styles.meta}>
//             {post.author?.name} &middot;{' '}
//             <time dateTime={post.rawDate}>{post.publishDate}</time>
//           </span>
//           <div className={styles.article}>
//             <div
//               className={styles.body}
//               dangerouslySetInnerHTML={{
//                 __html: post.body?.childMarkdownRemark?.html,
//               }}
//             />
//             <Tags tags={post.tags} />
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     contentfulArticle(slug: { eq: $slug }) {
//       slug
//       title
//       heroImage {
//         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1000)
//         resize(height: 600, width: 1000) {
//           src
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//       tags
//       publishDate
//     }
//   }
// `
