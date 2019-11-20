/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./stylesheets/layout.scss"
import "./stylesheets/custom.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Abel|Alata&display=swap" rel="stylesheet" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main">
        {children}
      </div>
      <footer>
        <small>© {new Date().getFullYear()}, built with <a href="https://www.gatsbyjs.org">Gatsby</a>.</small>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
