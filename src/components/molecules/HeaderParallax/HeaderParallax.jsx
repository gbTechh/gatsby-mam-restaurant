import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { useGetDataHeader } from "../../../hooks"
import { useImageHeroParallax } from "../../../hooks/useImageHeroParallax"

import { Button, Col, Container, Row, Spacer, Text } from "../../ui"

import "./header.css"

export const HeaderParallax = ({ children, ...props }) => {
  const { titleTextHeader, subtitleTextHeader, shortDescriptionHeader } =
    useGetDataHeader()
  const imageParallax = useImageHeroParallax()

  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Container fluid pd="0" className="header-parallax">
      <div className="header-parallax__opacity"></div>
      <GatsbyImage
        style={{
          transform: `translateY(-${offset * 0.03}%)`,
        }}
        image={getImage(imageParallax)}
        alt="Mam restaurant"
        className="header-parallax__image"
      />
      <Container pd="0" className="header-parallax__text-container">
        <Row wrap="wrap" className="header-parallax__row">
          <Col col="12">
            <Spacer x="0" />
            <Text align="left" color="secondary1" fw="strong">
              {titleTextHeader}
            </Text>
          </Col>
          <Spacer y="4" />
          <Col col="12">
            <Text size="h1" align="left" color="secondary1">
              {subtitleTextHeader}
            </Text>
          </Col>
          <Spacer y="4" />
          <Col col="12">
            <Text align="left" color="secondary1">
              {shortDescriptionHeader}
            </Text>
          </Col>
        </Row>
        <Row className="header-parallax__row-btns">
          <Col>
            <Link to="/#about-us">
              <Button size="md">Explore now</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/">
              <Button size="md" color="primary1" textColor="light">
                View Menu
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
