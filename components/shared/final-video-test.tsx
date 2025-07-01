"use client";

import VideoPlayer from "./video-player";

export function FinalVideoTest() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Final Video Player Test</h1>
      <p className="mb-4 text-gray-600">
        This video should autoplay without showing any play button, even on
        mobile devices. If the video fails to load, it will show a fallback
        image after 5 seconds.
      </p>

      <div className="relative aspect-video rounded-lg overflow-hidden">
        <VideoPlayer
          videoSrc="entertainment-1"
          fallbackImage="/entertainment/entertainment-1.jpeg"
          fallbackAlt="Entertainment area"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>✅ Autoplay enabled</p>
        <p>✅ Muted for browser compatibility</p>
        <p>✅ playsInline for mobile</p>
        <p>✅ Multiple video formats (MP4 + WebM)</p>
        <p>✅ Fast fallback to image (5s timeout)</p>
        <p>✅ Aggressive play button hiding</p>
        <p>✅ Mobile touch interaction support</p>
      </div>
    </div>
  );
}
