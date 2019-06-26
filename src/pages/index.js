import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <div className="homeHeader">
        <div className="headerIntro">
          <div>
            <h1>Hi, I'm Casey</h1>
            <p>Student // Software Developer</p>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 className="emojiBlurb"><span role="img">💻</span></h1>
          <h1 className="emojiBlurb"><span role="img">📱</span></h1>
        </div>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Grid>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
