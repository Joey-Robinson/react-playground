import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about">
      <h1>From about</h1>
    </div>
  </Layout>
)

export default About
