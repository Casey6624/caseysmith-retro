import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
// components
import AboutMe from "../components/AboutMe/AboutMe"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div container className="homeHeader">
      <Grid item xs={12} md={7} className="headerIntro">
        <div>
          <h1 className="hi">Hi, I'm Casey</h1>
          <p>Student // Software Developer</p>
        </div>
      </Grid>
      <Grid item xs={12} md={4} sm={2} className="emojiContainer">
        <h1 className="emojiBlurb"><span role="img">💻</span></h1>
        <h1 className="emojiBlurb"><span role="img">📱</span></h1>
        <h1 className="emojiBlurb"><span role="img">👨‍💻</span></h1>
        <h2 className="emojiBlurbSmol"><span role="img">💻</span></h2>
        <h2 className="emojiBlurbSmol"><span role="img">📱</span></h2>
        <h2 className="emojiBlurbSmol"><span role="img">👨‍💻</span></h2>
      </Grid>
    </div>
    <Grid container class="mainBlurb">
      <AboutMe />
    </Grid>
  </Layout>
)

export default IndexPage
