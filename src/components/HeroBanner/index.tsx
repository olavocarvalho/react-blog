import { Children } from "react"
import { HeroContent } from "./styles"

interface HeroBannerProps {
  children: JSX.Element | JSX.Element[]
}

export function HeroBanner({ children }: HeroBannerProps) {
  return (
    <HeroContent>
      {children}
    </HeroContent>
  )
}