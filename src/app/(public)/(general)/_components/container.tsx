import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ReactNode } from "react";

const containerVariants = cva("", {
  variants: {
    variantWidth: {
      default: "px-4 md:px-5 lg:px-20 2xl:px-28",
      wide: "px-4 md:px-8 lg:px-32 xl:px-40",
      narrow: "px-4 md:px-8 lg:px-12 xl:px-16",
      backgroundColor: "",
      page: "",
      none: "",
    },
    variantHeight: {
      default: "",
      card: "pt-5 pb-16 lg:pt-16",
      page: "flex flex-col gap-16",
      none: "",
    },
    backgroundColor: {
      default: "",
      peach: "bg-peach",
    },
    defaultVariants: {
      backgroundColor: "default",
    },
  },
});
type Props = {
  variantWidth: VariantProps<typeof containerVariants>["variantWidth"];
  variantHeight: VariantProps<typeof containerVariants>["variantHeight"];
  backgroundColor?: VariantProps<typeof containerVariants>["backgroundColor"];
  children: ReactNode;
  className?: string;
} & ComponentProps<"div">;

const Container = ({
  variantWidth,
  variantHeight,
  children,
  className,
  backgroundColor,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        containerVariants({
          variantWidth,
          variantHeight,
          backgroundColor,
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
