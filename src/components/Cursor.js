import * as React from "react"
import { gsap } from "gsap"
import "./Cursor.css"

const Cursor = () => {
  const [isMouseMoved, setIsMouseMoved] = React.useState(false)
  React.useEffect(() => {
    document.body.addEventListener("mousemove", onMouseMove)
    return () => {
      document.body.removeEventListener("mousemove", onMouseMove)
    }
  })

  const onMouseMove = e => {
    if (!isMouseMoved) setIsMouseMoved(true)
    gsap.to(".cursor__ball--big", {
      x: e.clientX - 15,
      y: e.clientY - 19,
      duration: 0.4,
    })
    gsap.to(".cursor__ball--small", {
      x: e.clientX - 5,
      y: e.clientY - 7,
      duration: 0.1,
    })
  }
  if (!isMouseMoved) return null
  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big ">
        <svg height="40" width="40">
          <circle cx="18" cy="18" r="18" strokeWidth="0"></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
        <svg height="15" width="15">
          <circle cx="7" cy="7" r="7" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  )
}
export default Cursor
