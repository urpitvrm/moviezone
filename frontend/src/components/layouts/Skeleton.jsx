import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCard = () => {
  return (
    <ContentLoader 
      speed={2}
      width={300}
      height={400}
      viewBox="0 0 300 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="w-full"
    >
      <rect x="0" y="0" rx="8" ry="8" width="100%" height="250" /> 
      <rect x="0" y="270" rx="4" ry="4" width="60%" height="20" /> 
      <rect x="0" y="300" rx="4" ry="4" width="40%" height="20" /> 
      <rect x="0" y="340" rx="8" ry="8" width="100%" height="40" />
      
    </ContentLoader>
  );
};

export default SkeletonCard;
