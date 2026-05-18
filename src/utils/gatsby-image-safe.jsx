import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

/** Renders GatsbyImage only when `image` is defined (avoids SSR/build failures). */
export function GatsbyImageSafe({ image, alt, className, style, ...rest }) {
  if (!image) {
    return (
      <div
        className={className}
        style={{ backgroundColor: "#f0f0f0", minHeight: 120, ...style }}
        aria-hidden
      />
    )
  }
  return (
    <GatsbyImage
      image={image}
      alt={alt || ""}
      className={className}
      style={style}
      {...rest}
    />
  )
}
