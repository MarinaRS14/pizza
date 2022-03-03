import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
        className='pizza-block' 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="120" r="120" /> 
        <rect x="0" y="305" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="412" rx="6" ry="6" width="80" height="40" /> 
        <rect x="0" y="255" rx="6" ry="6" width="280" height="30" /> 
        <rect x="100" y="406" rx="30" ry="30" width="171" height="50" />
      </ContentLoader>
      )
}

export default LoadingBlock;