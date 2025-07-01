import Image from "next/image";

interface BackgroundLogoBottomDarkProps {
  position?: "left" | "right";
}

const BackgroundLogoBottomDark = ({
  position = "right",
}: BackgroundLogoBottomDarkProps) => {
  const isLeft = position === "left";

  return (
    <>
      {/* Background with Logo Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a5a5c] via-[#4a4a4c] to-[#3a3a3c]">
        {/* Single Logo positioned based on props */}
        <div className="absolute inset-0">
          <div
            className={`absolute bottom-4 w-16 h-16 sm:bottom-10 sm:w-20 sm:h-20 opacity-70 ${
              isLeft ? "left-4 sm:left-10" : "right-4 sm:right-10"
            }`}
          >
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundLogoBottomDark;
