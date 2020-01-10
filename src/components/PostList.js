import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./PostList.css"

const getDate = date =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

const PostList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                path
                date
                excerpt
              }
            }
          }
        }
      }
    `
  )

  return (
    <div class="post-list">
      {allMarkdownRemark.edges.map(({ node }) => (
        <a class="post-list__link" href={node.frontmatter.path}>
          <article class="post-list__item">
            <h2 class="post-list__title">{node.frontmatter.title}</h2>
            <p class="post-list__excerpt">{node.frontmatter.excerpt}</p>
            <span class="post-list__cta">Read now ></span>
            {/* <small class="post-list__date">
              {getDate(node.frontmatter.date)}
            </small> */}
          </article>
        </a>
      ))}
    </div>
  )
}

export default PostList
