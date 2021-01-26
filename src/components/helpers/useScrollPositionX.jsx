// import React from "react"
import { useEffect, useState } from "react"

export default function useParalax() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageXOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return offset
}


//IMPORT THIS IN COMPONENT TO GET HORIZONTAL SCROLLPOSITION
// import useParalax from './useParalax';
// const isOnline = useParalax();
