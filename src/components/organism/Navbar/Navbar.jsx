import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { useLogo } from "../../../hooks"
import { ItemNavbar, MenuBurguer } from "../../atoms"

import "./navbar.css"
import { Spacer, Text } from "../../ui"
import { useGetMenuNav } from "../../../hooks/useGetMenuNav"

export const Navbar = () => {
  const logo = useLogo()
  const menu = useGetMenuNav()

  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <GatsbyImage image={getImage(logo)} alt="mam-restaurant" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {menu.length &&
          menu.map((item) => (
            <React.Fragment key={item.node.slug}>
              <ItemNavbar slug={item.node.slug}>{item.node.title}</ItemNavbar>
            </React.Fragment>
          ))}
      </ul>

      <div className="app__navbar-smallscreen">
        <span onClick={() => setToggleMenu(!toggleMenu)}>
          <MenuBurguer />
        </span>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <Text
              fw="title"
              size="h3"
              className="menu__close"
              onClick={() => setToggleMenu(false)}
            >
              X
            </Text>
            <ul className="app__navbar-smallscreen_links">
              {menu.length &&
                menu.map((item) => (
                  <React.Fragment key={item.node.slug}>
                    <Text align="right" size="h4">
                      <a
                        href={`#${item.node.slug}`}
                        onClick={() => setToggleMenu(false)}
                      >
                        {item.node.title}
                      </a>
                    </Text>
                    <Spacer y="10" />
                  </React.Fragment>
                ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
