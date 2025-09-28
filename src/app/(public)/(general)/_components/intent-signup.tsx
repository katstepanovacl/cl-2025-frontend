import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const IntentSignup = ({
  title,
  description,
  buttonText,
  buttonLink,
}: Props) => {
  return (
    <div className="w-full p-6 rounded-lg bg-white border border-medium-beige flex flex-col items-center justify-center gap-5 max-w-[518px]">
      <p className="font-playfair text-brown text-center text-pretty text-[28px] font-medium tracking-[-0.42px] leading-[38px]">
        {title}
      </p>
      <p className="text-light-brown text-center text-balance text-[16px] leading-[24px]">
        {description}
      </p>
      <Button asChild>
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  );
};

export default IntentSignup;
