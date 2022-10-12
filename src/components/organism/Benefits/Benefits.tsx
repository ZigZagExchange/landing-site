import React, { useEffect } from "react";
import classNames from "classnames";
import Animation from "@/components/atomic/Animation/Animation";
import BenefitItem from "@/components/atomic/BenefitItem/BenefitItem";
import Slider from "react-slick";
import unparalled_quotes from "../../../../public/assets/unparalled-quotes.svg";
import security from "../../../../public/assets/security.svg";
import fast_withdrawl from "../../../../public/assets/fast-withdrawl.svg";

const data = [
  {
    title: "Unparalleled Quotes & Deep Liquidity",
    bg: unparalled_quotes,
    text: "We offer extremely low slippage for trades of all sizes, quotes that compete with ones offered by centralized exchanges",
  },
  {
    title: "High Scalability",
    bg: security,
    text: "By using ZK Rollups we are able to offer near-zero swap fees with nearly instantaneous transactions.",
  },
  {
    title: "Decentralized & Secure",
    bg: fast_withdrawl,
    text: "ZigZag aims to be fully decentralized and open source.",
  },
  {
    title: "CEX Price Feeds",
    bg: unparalled_quotes,
    text: "All price feeds are fetched from centralized exchanges,  always guaranteeing the best price possible.",
  },
];

const Benefits = () => {
  const settings = {
    infinite: false,
    speed: 800,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };
  return (
    <section className="text-center h-96">
      <p className="mt-32 text-4xl font-semibold tracking-wider text-center md:mx-4 md:text-5xl md:mt-0">
        Benefits and Features
      </p>
      <div className="grid grid-cols-4 gap-10 mt-16">
        {data.map((item, index) => {
          return <BenefitItem data={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Benefits;
