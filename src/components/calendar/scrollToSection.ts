import React from 'react'

export const scrollToSection = (
  elementRef: React.RefObject<HTMLDivElement>,
): void => {
  setTimeout(
    () =>
      window.scrollTo({
        top: elementRef.current!.offsetTop,
        behavior: 'smooth',
      }),
    100,
  )
}
