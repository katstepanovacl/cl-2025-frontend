import logo from "@/assets/logos/curate-full-black.svg";
import Image from "next/image";
import Link from "next/link";
const HeaderLogo = () => {
  return (
    <Link data-analytics="logo_nav" href="/">
      <Image src={logo} alt="logo" width={133} height={38.33} />
    </Link>
  );
};

export default HeaderLogo;
