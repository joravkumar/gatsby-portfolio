import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
// import Cursor from "../components/Cursor"
import Intro from "../components/Intro/Intro"

import "../styles/global.css"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"

import { Parallax } from "@react-spring/parallax"
// import "../styles/index"

const IndexPage = () => (
  <>
    <Parallax pages={3}>
      {/* <Cursor /> */}
      <Intro offset={0} factor={1} />
      <About offset={1} factor={1} />
      <Contact offset={2} factor={1} />
    </Parallax>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Jorav | Software Engineer" />

export default IndexPage
