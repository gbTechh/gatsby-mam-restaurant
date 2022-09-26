import React from "react"
import { SubHeadingIcon } from "../../atoms"
import { Spacer, Text } from "../../ui"


import "./subheading.css"

export const SubHeading = ({ title, align = "center", size = "h4" }) => (
  <div className="subheading">
    <Text fw="strong" color="secondary1" align={align} size="h4">
      {title}
    </Text>
    <SubHeadingIcon className="subheading-icon" w={50} />
    <Spacer y="7" />
  </div>
)
