import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi</h1>
    <Link to="/streamers/">Work</Link>
    <br/>
  </Layout>
)

export default IndexPage
