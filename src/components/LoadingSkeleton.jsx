import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../component css/Skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="mainSkeleton">
      <div className="skeletonHeader">
        <div className="leftContainerSk">
          <Skeleton width="6vw" height="3vh" style={{marginLeft: "3vw"}} />
        </div>
        <div className="rightContainerSk">
          <Skeleton width="5vw" height="3vh" style={{marginLeft: "3vw"}}/>
          <Skeleton width="5vw" height="3vh" style={{marginLeft: "3vw"}}/>
          <Skeleton width="5vw" height="3vh" style={{marginLeft: "3vw"}}/>
          <Skeleton width="5vw" height="3vh" style={{marginLeft: "3vw"}}/>
          <Skeleton width="5vw" height="3vh" style={{marginLeft: "3vw"}}/>
          <Skeleton width="5vw" height="3vh" style={{marginLeft: "3vw"}}/>
        </div>
      </div>
      <div>
          <Skeleton width="80vw" height="85vh" />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
