// Quick test to verify video URLs work
// Replace one of your Hero components temporarily with this for testing

import { SimpleVideoPlayer } from "@/components/shared/simple-video-test";

export default function VideoTest() {
  return (
    <div className="p-8">
      <h2 className="text-white mb-4">Video Test</h2>
      <SimpleVideoPlayer videoSrc="intro_reduced_2" />
    </div>
  );
}
