import React from "react";

type Props = {
  headline: string;
  subheadline: string;
};

const Headline = ({ headline, subheadline }: Props) => {
  return (
    <div className="flex py-14 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 flex-col items-center justify-center">
      <p className="max-w-[640px] font-playfair text-brown text-center text-pretty text-[32px] font-medium tracking-[0.5px] leading-[42px]">
        {headline}
      </p>
      <p className="mt-6 max-w-[640px] text-light-brown text-center text-balance text-[16px] leading-[24px]">
        {subheadline}
      </p>
    </div>
  );
};

export default Headline;
