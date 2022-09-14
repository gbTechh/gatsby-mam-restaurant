import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { Container } from "../ui"
import { Seo } from "../molecules"

export const LayoutHome = ({ title = "", description, children }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <Container>
        <main>{children}</main>
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
