import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="section" id="projects">
      <h3 className="text-center">What I've worked on:</h3>
      <ul>
        <li><a href="https://www.advanxhealth.com" target="_blank" rel="noopener noreferrer">Advanx Health website</a>, built with Gatsby hosted on Netlify.</li>
        <li><a href="https://app.advanxhealth.com" target="_blank" rel="noopener noreferrer">Advanx Health web app</a>, including e-commerce and payment, customer dashboard and DNA reports, and partner management portal. Built with Ruby on Rails hosted on Google Cloud Platform.</li>
        <li><a href="https://merdeka.advanxhealth.com/game" target="_blank" rel="noopener noreferrer">Catch The Jalur Gemilang</a>, a frontend game used for lead generation. Built with HTML, CSS, JS.</li>
        <li><a href="https://vulcanpost.com/619639/robot-call-app-mystery-messages-malaysia/" target="_blank" rel="noopener noreferrer">Robot Call App</a>, a fun tool for growth hacking using Twilio.</li>
      </ul>
      <h3 className="text-center">Side projects:</h3>
      <ul>
        <li><a href="https://www.instagram.com/lilithwomen/" target="_blank" rel="noopener noreferrer">Lilith</a>, normalising taboo topics in women's health. Organised monthly <a href="https://www.facebook.com/pg/lilithwomen/events/" target="_blank" rel="noopener noreferrer">women's health events</a>, produced a deck of <a href="https://www.lilithwomen.org/conversations" target="_blank" rel="noopener noreferrer">conversation starter cards</a>.</li>
        <li>Project Guardian, using machine learning to predict antimicrobial resistance outbreaks based on antibiotics usage in hospitals. Winning team of Health Hackathon KL 2018.</li>
      </ul>
    </div>
  </Layout>
)

export default ProjectsPage
