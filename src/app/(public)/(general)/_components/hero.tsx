import Image, { StaticImageData } from "next/image";
import heroLogo from "@/assets/images/hero-logo.png";

type Props = {
  hero?: StaticImageData;
  logo?: boolean;
};

const Hero = ({ hero, logo }: Props) => {
  return (
    <div
      className="relative w-full aspect-[16/9] flex items-center justify-center"
      // style={{
      //   backgroundImage: "url('/images/hero-placeholder.png')",
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
    >
      {hero && (
        <Image
          src={hero}
          alt="hero"
          className="w-full aspect-[16/9] absolute top-0 left-0"
          objectFit="contain"
          priority
        />
      )}
      {logo && (
        <Image
          src={heroLogo}
          alt="hero logo"
          objectFit="contain"
          className="md:max-w-90 lg:max-w-[516px] max-w-44 h-auto absolute inset-0 mx-auto transform top-1/2 -translate-y-1/2"
          priority
        />
      )}
    </div>
  );
};

export default Hero;
