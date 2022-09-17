import { useRef } from 'react';
import { useState, useEffect } from 'react';


export const useObserver = (options) => {

  // const [isIntersected, setIsIntersected] = useState(false)

  // const callback = (entrada) => {
  //   console.log({ entrada })
  //   entrada.forEach((e) => {
  //     if (e.isIntersecting) {
  //       console.log('yes')
  //       setIsIntersected(true)
  //     } else {
  //       setIsIntersected(false)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   const observador = new IntersectionObserver(callback, {
  //     root: root.current,
  //     rootMargin: margin,
  //     threshold: threshold,
  //   })
  //   observador.observe(element.current)
  // }, [])

  // return { isIntersected };
  const [elements, setElements] = useState([])

  const [entries, setEntries] = useState([])

  const observer = useRef()
  useEffect(() => {

    observer.current = new IntersectionObserver(observedEntries => {
      setEntries(observedEntries)
    }, options)

    const { current: currentObserver } = observer
    currentObserver.disconnect();
    if (elements.length > 0) {
      elements.forEach(element => currentObserver.observe(element))
    }
    return function cleanUp() {
      if (currentObserver) {
        currentObserver.disconnect()
      }
    }
  }, [elements])

  return [observer.current, setElements, entries]
}