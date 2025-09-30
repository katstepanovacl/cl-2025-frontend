import Image from "next/image";
import partialLogo from "@/assets/logos/curate-partial-footer.svg";

const Footer = () => {
  return (
    <div className="bg-soft-beige py-9 px-4 flex flex-col gap-18">
      <div className="flex flex-col gap-6">
        <Image src={partialLogo} alt="partial logo" />
        <p className="text-brown leading-[24px] text-base max-w-[309px] text-balance">
          Your go-to platform for seamless event planning and vendor
          collaboration.
        </p>
        <div>Social Icons</div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-brown text-base font-semibold">General</p>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
