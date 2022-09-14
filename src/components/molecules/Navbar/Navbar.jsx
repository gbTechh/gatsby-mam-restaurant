import React from "react"
import { ItemNavbar } from "../../atoms"

import "./navbar.css"

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="" alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <ItemNavbar slug="home">Home</ItemNavbar>
        <ItemNavbar slug="about-us">About us</ItemNavbar>
        <ItemNavbar slug="drinks">Drinks</ItemNavbar>
        <ItemNavbar slug="menu">Menu</ItemNavbar>
        <ItemNavbar slug="chef">Chef</ItemNavbar>
        <ItemNavbar slug="gallery">Gallery</ItemNavbar>
        <ItemNavbar slug="contact">Contact</ItemNavbar>
      </ul>

      <div className="app__navbar-smallscreen">
        <p onClick={() => setToggleMenu(!toggleMenu)}>menu</p>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <p onClick={() => setToggleMenu(false)}>Menu</p>
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
