import React from "react";
import ContentLoader from "react-content-loader"

function LoadingBlock(){
    return(
        <ContentLoader
            className={"pizza-block"}
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
          <circle cx="133" cy="132" r="122" />
          <rect x="-1" y="279" rx="3" ry="3" width="275" height="20" />
          <rect x="0" y="317" rx="3" ry="3" width="275" height="60" />
          <rect x="1" y="398" rx="3" ry="3" width="83" height="26" />
          <rect x="129" y="392" rx="20" ry="20" width="142" height="36" />
        </ContentLoader>
    )
}

export default LoadingBlock