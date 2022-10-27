import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { SubHeading } from "../../molecules"
import "./specialDrinks.css"

import { Button, Container, Spacer, Text } from "../../ui"
import { useGetColdDrinks } from "../../../hooks/useGetColdDrinks"
import { useGetHotDrinks } from "../../../hooks/useGetHotDrinks"
import { useGetImageDrink } from "../../../hooks/useGetImageDrink"
import { Link } from "gatsby"

export const SpecialDrinks = ({ children, ...props }) => {
  const {
    slug,
    specialdrinks: {
      groupText: { title, subtitle },
      drinkTitle: { drinksCold, hotDrink },
      image,
    },
  } = useGetImageDrink()
  const coldDrinks = useGetColdDrinks()
  const hotDrinks = useGetHotDrinks()

  return (
    <Container fluid pd="0" as="section" id={slug} className="special-drink">
      <Container className="special-drink special-drink__wrapper">
        <div className="special-drink__head">
          <SubHeading title={title} />
          <Text
            color="primary2"
            size="h1"
            as="h2"
            className="headtext__cormorant"
            ff="head"
          >
            {subtitle}
          </Text>
          <Spacer y="10" />
          <Spacer y="10" />
        </div>

        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_wine flex__center">
            <Text size="h2" as="h2" ff="head">
              {hotDrink}
            </Text>
            <Spacer y="5" />
            <div className="app__specialMenu_menu_items">
              {hotDrinks.map((e) => (
                <div key={e.node.name}>
                  <div className="app__menuitem">
                    <div className="app__menuitem-head">
                      <div className="app__menuitem-name">
                        <Text align="left" color="primary2">
                          {e.node.name}
                        </Text>
                      </div>
                      <div className="app__menuitem-dash" />
                      <div className="app__menuitem-price">
                        <Text align="left" fw="title">
                          €{e.node.hotDrinks.price}
                        </Text>
                      </div>
                    </div>
                    <div className="app__menuitem-sub">
                      <Text align="left" color="secondary2" size="small">
                        {e.node.description}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Spacer y="10|t:10|d:10|b:0" />
          <div className="app__specialMenu-menu_img">
            <GatsbyImage image={getImage(image)} alt="icon-image"></GatsbyImage>
          </div>
          <Spacer y="10|t:10|d:10|b:0" />
          <Spacer y="10|t:10|d:10|b:0" />
          <div className="app__specialMenu-menu_cocktails  flex__center">
            <Text size="h2" as="h2" ff="head">
              {drinksCold}
            </Text>
            <Spacer y="5" />
            <div className="app__specialMenu_menu_items">
              {coldDrinks.map((e, i) => (
                <div key={e.node.name + i}>
                  <div className="app__menuitem">
                    <div className="app__menuitem-head">
                      <div className="app__menuitem-name">
                        <Text align="left" color="primary2">
                          {e.node.name}
                        </Text>
                      </div>
                      <div className="app__menuitem-dash" />
                      <div className="app__menuitem-price">
                        <Text align="left" fw="title">
                          €{e.node.coldDrinks.price}
                        </Text>
                      </div>
                    </div>

                    <div className="app__menuitem-sub">
                      <Text align="left" color="secondary2" size="small">
                        {e.node.description}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Spacer y="10" />
        <Spacer y="10" />

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/drinks">
            <Button type="button" className="custom__button">
              View Drinks
            </Button>
          </Link>
        </div>
      </Container>
    </Container>
  )
}
