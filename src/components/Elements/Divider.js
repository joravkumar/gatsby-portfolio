import * as React from "react"

import { ParallaxLayer } from "@react-spring/parallax"
const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}) => (
  <ParallaxLayer
    sx={{
      position: `absolute`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Divider
