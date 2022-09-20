import React, { useEffect, useRef, useState } from "react"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

import { useGetDataAboutUs, useObserver } from "../../../hooks"
import { Button, Col, Container, Row, Spacer, Text } from "../../ui"

import { useGetMenuTypes } from "../../../hooks/useGetMenuTypes"
import "./menu.css"
import { SliderCss } from "../../molecules"
import { useGetDataMenu } from "../../../hooks/useGetDataMenu"

export const Menu = ({ children, ...props }) => {
  const taxonomyMenu = useGetMenuTypes()
  const { title, description, mainImage } = useGetDataMenu().menu

  return (
    <Container fluid pd="0" as="section" id={""} className="menu">
      <Container className="menu menu__wrapper">
        <div className="menu__row-1">
          <div className="menu__row-1__col-1 ">
            <GatsbyImage
              image={getImage(mainImage)}
              style={{ width: "100%", height: "100%" }}
              alt="vietnamese food"
            />
          </div>
          <Spacer y="10|t:0" />
          <Spacer y="10|t:0" />
          <Spacer x="0|t:10" />
          <Spacer x="0|t:10" />
          <div className="menu__row-1__col-2 ">
            <Text size="h2" ff="head" fw="strong" align="left" color="primary2">
              {title}
            </Text>
            <Spacer y={"10"} />
            <Text align="left">{description}</Text>
            <Spacer y={"10"} />
            <div className="menu__row-1__button">
              <Button size="md" br="sm">
                View menu
              </Button>
            </div>
          </div>
        </div>
        <Spacer y="10" />
        <Spacer y="10" />
        <Spacer y="10" />
        <Spacer y="10" />
        <Row className="menu__row-2">
          <Col className="menu__col-slider">
            <SliderCss images={taxonomyMenu} />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
