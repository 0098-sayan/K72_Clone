import React from "react";

const Video = ({ className = "" }) => {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      src="/video/front.mp4"
    />
  );
};

export default Video;
