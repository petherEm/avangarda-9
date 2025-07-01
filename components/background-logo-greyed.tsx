import Image from "next/image";

interface BackgroundLogoTopLightProps {
  position?: "left" | "right";
}

const BackgroundLogoGreyed = ({
  position = "left",
}: BackgroundLogoTopLightProps) => {
  const isLeft = position === "left";

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div
        className={`absolute top-4 w-32 h-32 sm:top-10 sm:w-40 sm:h-40 lg:w-48 lg:h-48 ${
          isLeft ? "left-4 sm:left-10" : "right-4 sm:right-10"
        }`}
      >
        <Image
          src="/avangarda-logo-lg-2.png"
          alt=""
          fill
          className="object-contain opacity-20 invert brightness-0"
          priority={false}
        />
      </div>
    </div>
  );
};

export default BackgroundLogoGreyed;
