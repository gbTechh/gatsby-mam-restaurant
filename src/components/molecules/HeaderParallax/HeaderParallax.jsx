import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { useEffect } from "react"
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
          maxWidth: "100%",
          width: "100%",
        }}
        imgStyle={{
          maxWidth: "100%",
          width: "100%",
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
              {subtitleTextHeader}
            </Text>
          </Col>
          <Spacer y="4" />
          <Col col="12">
            <Text size="big" align="left" color="secondary1">
              {titleTextHeader}
            </Text>
          </Col>
          <Spacer y="4" />
          <Col col="12">
            <Text align="left" color="secondary1" fw="bquote">
              {shortDescriptionHeader}
            </Text>
          </Col>
        </Row>
        <Spacer y="8" />
        <Row className="header-parallax__row-btns">
          <Col>
            <Link to="/#about-us">
              <Button size="md" br="sm">
                Explore now
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/">
              <Button size="md" color="primary1" textColor="light" br="sm">
                View Menu
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
