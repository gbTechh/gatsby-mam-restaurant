import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react"
import { LayoutHome, CartMenu } from "../components"
import { Button, Spacer } from "../components/ui";
import { useGetCartDrinksImage } from "../hooks/useGetCartDrinksImage";

export default function Homepage() {

  const cartDrinks = useGetCartDrinksImage();
  return (
    <LayoutHome title='Menu Cart' noHeader>
      <CartMenu>
        {
          cartDrinks.map((e, i) => (
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
        <Link to="/menu">
          <Button size="md" br="sm">
            View Menu
          </Button>
        </Link>
      </div>
    </LayoutHome>
  )
}
