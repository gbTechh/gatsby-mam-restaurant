import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { useGetDataChef } from "../../../hooks/useGetDataChef"
import { ItemNavbar } from "../../atoms"

import { SubHeading } from "../../molecules"
import { Container, Spacer, Text } from "../../ui"
// import { images } from '../../constants';
import "./chef.css"

export const Chef = () => {
  const {
    chef: { titles, description, imageChefs, sign, nameChefs, jobPosition },
  } = useGetDataChef()
  const chefsArr = nameChefs.split(",")
  const jobArr = jobPosition.split(",")
  return (
    <Container className="chef">
      <div className="chef-row">
        <div className="chef-col chef-col--1">
          <GatsbyImage
            image={getImage(imageChefs)}
            alt="chefs-image"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "0px 50px 0px 50px",
            }}
          />
        </div>
        <Spacer x="0|t:10" />
        <Spacer x="0|t:10" />
        <div className="chef-col chef-col--2">
          <SubHeading title={titles.subtitle} align="left" />
          <Text size="h2" ff="head" color="primary2" align="left">
            {titles.mainTitle}
          </Text>
          <Spacer y="10" />
          <Text align="left">{description}</Text>
          <Spacer y="10" />
          <div>
            <div className="chef-names">
              {chefsArr &&
                chefsArr.map((e, i) => (
                  <div className="chef-names-group" key={e}>
                    <Text align="left" color="primary2" fw="title">
                      {e.trim()}
                    </Text>
                    <Text
                      align="left"
                      size="small"
                      fw="title"
                      color="secondary1"
                    >
                      {jobArr[i].trim()}
                    </Text>
                  </div>
                ))}
            </div>
            <Spacer y="10" />
            <GatsbyImage
              image={getImage(sign)}
              alt="chefs-image"
              style={{
                width: "100%",
                maxWidth: "150px",
                height: "100%",
                filter:
                  "invert(100%) sepia(3%) saturate(655%) hue-rotate(216deg) brightness(117%) contrast(81%)",
              }}
              imgStyle={{
                objectFit: "contain",
              }}
            />
            <Spacer y="10" />
            <Spacer y="10" />
          </div>
        </div>
      </div>
    </Container>
  )
}
