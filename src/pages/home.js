import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'


const Home = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
    <h1>Hi</h1>
      <Link to="/streamers/">Work</Link>
      <br/>
  </div>
  </Layout>
)

export default Home
