import { Container } from "../../container";
import { ConfiguredVideoPlayer } from "@/components/shared";

export default function OffersHero() {
  return (
    <Container className="relative h-[60vh] md:h-screen w-full overflow-hidden">
      <ConfiguredVideoPlayer module="offers" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </Container>
  );
}
