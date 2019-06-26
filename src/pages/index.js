import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
// components
import AboutMe from "../components/AboutMe/AboutMe"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container className="homeHeader">
      <Grid item xs={12} md={7} className="headerIntro">
        <div>
          <h1 className="hi">Hi, I'm Casey</h1>
          <p>Student // Software Developer</p>
        </div>
      </Grid>
      <Grid item xs={12} md={4} className="emojiContainer">
        <h1 className="emojiBlurb"><span role="img">💻</span></h1>
        <h1 className="emojiBlurb"><span role="img">📱</span></h1>
        <h1 className="emojiBlurb"><span role="img">👨‍💻</span></h1>
      </Grid>
    </Grid>
    <Grid container class="mainBlurb">
      <AboutMe />
    </Grid>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
