import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About"/>
    <div className="section" id="intro">
      <p>Hi, I'm a software engineer, pharmacist and data enthusiast.<br/>I'm experienced with building cloud web applications from ground up in fast-paced startup environments.</p>
      <p>I mainly code in Ruby and ReactJS, ocassionally on NodeJS and Python.</p>

      <p>In 2018, I co-founded <a href="https://www.advanxhealth.com" target="_blank" rel="noopener noreferrer">Advanx Health</a> to provide direct-to-consumer genetics testing in Malaysia, where I managed the tech and marketing part of the business.</p>
      <p>Prior to that, I worked as a software engineer and tech lead at <a href="https://www.nextacademy.com" target="_blank" rel="noopener noreferrer">Next Academy</a> , where I built and maintained production level web applications for internal and external usage.</p>
      <p>Before learning to code from a full-stack web development bootcamp and switching to the tech industry, I graduated with a Masters of Pharmacy from University of Portsmouth UK, and worked as a pharmacist for 1.5 years.</p>
    </div>
    <div className="social">
      <p>Connect with me on <a href="https://www.linkedin.com/in/yenpingchew/" target="_blank" rel="noopener noreferrer">Linkedin</a>, <a href="https://github.com/pynkvalerian" target="_blank" rel="noopener noreferrer">Github</a>, <a href="https://twitter.com/pingthedreamer" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
    </div>
  </Layout>
)

export default IndexPage
