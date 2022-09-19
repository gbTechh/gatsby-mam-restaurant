import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { Container } from "../ui"
import { Seo } from "../atoms"
import { HeaderParallax, Navbar } from "../organism"

export const LayoutHome = ({ title = "", description, children }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <Container pd="0" fluid>
        <Navbar />
        <HeaderParallax />

        <main className="background-color">{children}</main>

        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        ></footer>
      </Container>
    </>
  )
}

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}
