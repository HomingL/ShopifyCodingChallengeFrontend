import React from "react"
// import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Search } from "../modules/Search"
import { Grid } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Shoppies" />
    <Grid container>
      <Grid item xs={12}> <Search/> </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
