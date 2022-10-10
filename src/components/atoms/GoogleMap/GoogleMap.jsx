import React from "react"
import GoogleMapReact from "google-map-react"

import "./googlemap.css"

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

export const GoogleMap = () => (
  <div className="googlemap">
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: "AIzaSyBkVz0NJ8MvwADv_7Vl_YT4rHeyOnuY3ic" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text={"Kreyser Avrora"}
      />
    </GoogleMapReact>
  </div>
)
