import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '@material-ui/core/Button'
import CustomizedDialogDemo from '../components/modal'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi</h1>
    <Link to="/work/">Work</Link>
    {/* <Button variant="contained" color="primary">
      Hello World
    </Button> */}
    <CustomizedDialogDemo />
    <br/>
  </Layout>
)

export default IndexPage
