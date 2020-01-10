import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProfileImg from "./ProfileImg"

import "./Intro.css"

const Intro = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  return (
    <div class="intro">
      <div class="intro-pic">
        <ProfileImg />
      </div>
      <div class="intro-details">
        <h1 class="intro-details__name">Daniel Liburd</h1>
        <p class="intro-details__description">
          {site.siteMetadata.description}
        </p>
      </div>
    </div>
  )
}

export default Intro
