"use client";

import { useRef, useEffect } from "react";

interface SimpleVideoPlayerProps {
  videoSrc: string;
}

export function SimpleVideoPlayer({ videoSrc }: SimpleVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.log);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "300px" }}
      controls // Temporarily add controls for debugging
    >
      <source
        src={`https://moviestorage.fra1.cdn.digitaloceanspaces.com/${videoSrc}.mp4`}
        type="video/mp4"
      />
    </video>
  );
}
