import React from "react"
import ContentLoader from "react-content-loader"

const HomeSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={500}
    height={540}
    viewBox="0 0 500 540"
    backgroundColor="#e3e3e3"
    foregroundColor="#ecebeb"
    className="w-full"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
)

export default HomeSkeleton
