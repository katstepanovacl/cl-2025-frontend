import React from "react";

type Props = {
  headline: string;
  subheadline?: string;
  firstHeadline?: boolean;
};

const Headline = ({ headline, subheadline, firstHeadline }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {firstHeadline && (
        <h1 className="uppercase max-w-[640px] font-playfair text-brown text-center text-pretty text-[32px] font-medium tracking-[0.5px] leading-[42px]">
          {headline}
        </h1>
      )}
      {!firstHeadline && (
        <p className="uppercase max-w-[640px] font-playfair text-brown text-center text-pretty text-[32px] font-medium tracking-[0.5px] leading-[42px]">
          {headline}
        </p>
      )}
      {subheadline && (
        <p className="mt-6 max-w-[640px] text-light-brown text-center text-balance text-[16px] leading-[24px]">
          {subheadline}
        </p>
      )}
    </div>
  );
};

export default Headline;
