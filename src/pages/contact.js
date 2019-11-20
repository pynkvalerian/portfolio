import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="section" id="speaking">
      <h3 className="text-center">Leave a message</h3>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label>Name:</label><br/>
          <input type="text" name="name" required/>
        </div>
        <div className="form-group">
          <label>Email:</label><br/>
          <input type="email" name="email" required/>
        </div>
        <div className="form-group">
          <label>Message:</label><br/>
          <textarea type="text" name="message" rows="5" required/>
        </div>
        <input type="submit" className="bg-primary"/>
      </form>

    </div>
  </Layout>
)

export default ContactPage
