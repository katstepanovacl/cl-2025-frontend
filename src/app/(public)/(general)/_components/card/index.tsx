import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cardVariants = cva("flex flex-col gap-12 lg:flex-row", {
  variants: {
    variant: {
      default: "",
      alternate: "bg-peach lg:flex-row-reverse",
    },
  },
});
type Props = {
  variant: VariantProps<typeof cardVariants>["variant"];
  cardImage: StaticImageData;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
} & ComponentProps<"div">;

const Card = ({
  variant,
  cardImage,
  alt,
  title,
  description,
  buttonText,
  buttonLink,
  ...props
}: Props) => {
  return (
    <div className={cn(cardVariants({ variant }))} {...props}>
      <div>
        <Image src={cardImage} alt={alt} />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-brown font-playfair text-[28px] leading-[36px] tracking-[0.5px] font-bold">
            {title}
          </p>
          <p className="text-light-brown text-[16px] leading-[24px]">
            {description}
          </p>
        </div>
        <div>
          {buttonText && (
            <Button variant="default" size="lg" asChild>
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
