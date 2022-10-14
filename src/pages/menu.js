import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react"
import { LayoutHome, CartMenu } from "../components"
import { Button, Spacer, Text } from "../components/ui";
import { useGetCarMenuImage } from "../hooks/useGetCarMenuImage";

export default function Homepage() {

  const cartMenu = useGetCarMenuImage();

  return (
    <LayoutHome title='Menu Cart' noHeader>
      <CartMenu>
        {
          cartMenu.map((e, i) => (
            <GatsbyImage
              key={i}
              image={getImage(e)}
              alt="menu-mam-restaurant"
              style={{
                width: "100%",
              }}
            />
          ))
        }

      </CartMenu>
      <Spacer y='10' />
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <Link to="/drinks">
          <Button size="md" br="sm">
            View Drinks
          </Button>
        </Link>
      </div>
    </LayoutHome>
  )
}
