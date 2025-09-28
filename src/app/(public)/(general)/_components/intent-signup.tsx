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
    <div>
      <p className="font-playfair text-brown text-center text-pretty text-[32px] font-medium tracking-[0.5px] leading-[42px]">
        {title}
      </p>
      <p className="mt-6 max-w-[640px] text-light-brown text-center text-balance text-[16px] leading-[24px]">
        {description}
      </p>
      <Button asChild>
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  );
};

export default IntentSignup;
