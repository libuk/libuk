import React from "react"

import Layout from "../components/layout"
import Intro from "../components/Intro"
import SEO from "../components/seo"
import PostList from "../components/PostList"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Intro />
      <PostList />
    </Layout>
  )
}

export default IndexPage
