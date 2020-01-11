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
    <section class="post-list">
      <h2 class="post-list__heading">Recent Articles</h2>
      {allMarkdownRemark.edges.map(({ node }) => {
        const { path, title, excerpt } = node.frontmatter

        return (
          <a
            class="post-list__link"
            href={path}
            aria-label={`link for blog post: ${title}`}
          >
            <article class="post-list__item">
              <h2 class="post-list__title">{title}</h2>
              <p class="post-list__excerpt">{excerpt}</p>
              <span class="post-list__cta">Read now ></span>
            </article>
          </a>
        )
      })}
    </section>
  )
}

export default PostList
