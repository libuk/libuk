import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="header">
      <h1 class="header-title">Daniel Liburd</h1>
      <p class="header-desc">engineer @ yld</p>
    </div>
    <div class="links">
      <div class="link-item-wrapper">
        <a class="link-item" href="https://twitter.com/libuk_" target="_blank">
          tweets
        </a>
      </div>
      <div class="link-item-wrapper">
        <a class="link-item" href="https://github.com/libuk" target="_blank">
          code
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
