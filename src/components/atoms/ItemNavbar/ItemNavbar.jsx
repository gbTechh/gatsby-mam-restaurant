import React from "react"
import { Text } from "../../ui"

import "./itemNavbar.css"

export const ItemNavbar = ({ children, slug, ...props }) => {
  return (
    <li className="item-navbar" {...props}>
      <Text as="a" href={`#${slug}`} size="base" ff="head" fw="bquote">
        {children}
      </Text>
    </li>
  )
}
