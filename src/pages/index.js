import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/Intro"
import SEO from "../components/seo"

function IndexPage() {
  const { allMarkdownRemark, site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
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
      <Intro />
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
