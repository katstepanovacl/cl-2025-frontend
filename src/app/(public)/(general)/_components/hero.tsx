import Image from "next/image";
import heroLogo from "@/assets/images/hero-logo.png";

type Props = {
  hero?: string;
};

const Hero = ({ hero }: Props) => {
  return (
    <div
      className="w-full max-h-[224px] md:max-h-[245px] lg:max-h-[552px] bg-brown flex items-center justify-center"
      // style={{
      //   backgroundImage: "url('/images/hero-placeholder.png')",
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
    >
      <Image
        src={heroLogo}
        alt="hero logo"
        objectFit="contain"
        className="md:max-w-96 max-w-44  h-auto"
      />
    </div>
  );
};

export default Hero;
