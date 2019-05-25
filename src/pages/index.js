import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
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
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="header">
        <h1 class="header-title">Daniel Liburd</h1>
        <p class="header-desc">engineer @ yld</p>
      </div>
      <ul class="post-list">
        {allMarkdownRemark.edges.map(({ node }) => (
          <li class="post-list__item">
            <a class="post-list__title" href={node.frontmatter.path}>
              {node.frontmatter.title}
            </a>
            <span class="post-list__date">
              {new Date(`${node.frontmatter.date}`).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
