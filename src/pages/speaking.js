import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SpeakingPage = () => (
  <Layout>
    <SEO title="Speaking" />
    <div className="section" id="speaking">
      <h3 className="text-center">Speaking engagements & volunteering:</h3>
      <p>2019</p>
      <ul>
        <li><a href="https://www.linkedin.com/posts/bigithq_datasciences-ir4-industry4wrd-activity-6595583019074052096-B88E" target="_blank" rel="noopener noreferrer">BIGIT The 7th Annual Data Science Show</a>, "Cracking your genomics secrets for personalised healthcare", speaker, Sept 2019.</li>
        <li><a href="https://www.facebook.com/watch/?v=2401369523479785" target="_blank" rel="noopener noreferrer">PechaKucha Petaling Jaya vol. 9</a>, "The Non-Cookie Cutter Lifestyle", speaker, Jun 2019.</li>
        <li><a href="https://www.facebook.com/events/579825495759214/" target="_blank" rel="noopener noreferrer">Google Cloud Next Extended 19 Kuala Lumpur</a>, "Exploring your DNA with Google Genomics", speaker, Apr 2019.</li>
        <li><a href="https://university.taylors.edu.my/bz/whats-happening/past-events.html" target="_blank" rel="noopener noreferrer">Understanding Entrepreneurialism Speaker Series</a> by Taylor's University thesetup, "Bootstrapping Journey with Ping from Advanx Health", speaker, Apr 2019.</li>
      </ul>
      <p>2018 and earlier</p>
      <ul>
        <li><a href="https://www.facebook.com/events/214803342717317/" target="_blank" rel="noopener noreferrer">Malaysian Innovative Healthcare Symposium 2018</a>, "Leveraging Technology for Personalised Healthcare", speaker, Oct 2018.</li>
        <li><a href="https://www.facebook.com/events/1897739280306676/" target="_blank" rel="noopener noreferrer">Women Who Code KL</a>, "Health Tech - How to hack your own health with technology?", speaker, Oct 2018.</li>
        <li>University of Malaya Healthcare Business Ideas Competition Bootcamp, "Product Development and Scaling Plans", speaker & mentor, Sept 2018.</li>
        <li>Artificial Intelligence (AI) Saturdays Cycle 1 Kuala Lumpur chapter, ambassador & volunteer, Jan-Mar 2018.</li>
        <li>CoD3sign: A Girl's Starter Guide to World Domination with Tech by Women Techmakers and Women@Google, panel speaker, May 2017.</li>
        <li>Short HTML CSS Coding Course for Fugee School by Women Who Code KL, mentor, Nov 2016.</li>
      </ul>
    </div>
  </Layout>
)

export default SpeakingPage
