// import React from "react"
import { useEffect, useState } from "react"

export default function useParalax() {
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffsetY(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return offsetY
}

// The read-only Window property pageYOffset is an alias for scrollY; as such, it 
// returns the number of pixels the document is currently scrolled along the vertical axis 
// (that is, up or down) with a value of 0.0, indicating that the top edge of the Document is 
// currently aligned with the top edge of the window's content area.

//IMPORT THIS IN COMPONENT TO GET VERTICAL SCROLLPOSITION
// import useParalax from './useParalax';
// const isOnline = useParalax();