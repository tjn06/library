// import React from "react"
import { useEffect, useState } from "react"
import { throttle } from 'lodash';

export default function useWindowWidth() {
  const [dimensions, setDimensions] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    
    }
  })
  return dimensions
}


//IMPORT THIS IN COMPONENT TO GET HORIZONTAL SCROLLPOSITION
// import useParalax from './useParalax';
// const isOnline = useParalax();
