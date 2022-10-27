import React from "react"

import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { SubHeading } from "../../molecules"

import { Container, Spacer, Text } from "../../ui"
import "./contact.css"
import { useGetDataContact } from "../../../hooks/useGetDataContact"
import { GoogleMap } from "../../atoms"

export const Contact = ({ children, ...props }) => {
  const {
    slug,
    id,
    contact: {
      titlesContact: { mainTitle, subtitle },
      direction,
      hours,
    },
  } = useGetDataContact()
  return (
    <Container className="contact" id={slug}>
      <div className="contact__content">
        <SubHeading title={subtitle} align="left" />
        <Text align="left" size="h2" ff="head" color="primary2">
          {mainTitle}
        </Text>
        <Spacer y="10" />
        <Text align="left">{direction}</Text>
        <Spacer y="10" />
        <Text align="left" ff="head" color="primary2" size="h4">
          {"Opening Hours"}
        </Text>
        <Spacer y="10" />
        {hours
          .split("*")
          .filter((e) => e)
          .map((hour, i) => (
            <Text key={i} align="left">
              {hour}
            </Text>
          ))}
        <Spacer y="10|t:10|d:0" />
        <Spacer y="10|t:10|d:0" />
      </div>
      <Spacer x="0|t:0|d:10" />
      <div className="contact__map">
        <GoogleMap />
      </div>
    </Container>
  )
}
