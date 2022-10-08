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
    title: "Unparalled Quotes",
    bg: unparalled_quotes,
    text: "We offer extremely low slippage for trades of all sizes, quotes that compete with ones offered by centralized exchanges",
  },
  {
    title: "High Scalability",
    bg: security,
    text: "By using ZK Rollups we are able to offer near-zero swap fees with nearly instantaneous transactions.",
  },
  {
    title: "Decentralized & Open source",
    bg: fast_withdrawl,
    text: "ZigZag aims to be fully decentralized and open source.",
  },
  {
    title: "Deep Liquidity",
    bg: unparalled_quotes,
    text: "We offer deep liquidity across our trading pairs to ensure low slippage on all trade sizes. ",
  },
  {
    title: "CEX Price Feeds",
    bg: unparalled_quotes,
    text: "All price feeds are fetched from centralized exchanges,  always guaranteeing the best price possible.",
  },
  {
    title: "Fast Withdrawal",
    bg: unparalled_quotes,
    text: "We offer nearly instant withdrawals from L2 back to Ethereum Mainnet (Layer 1), in the event you want to migrate funds quickly.",
  },
  {
    title: "Global Reach",
    bg: unparalled_quotes,
    text: "Users are able to access ZigZag from anywhere. ",
  },
  {
    title: "Community led",
    bg: unparalled_quotes,
    text: "The ZigZag token will interact as a governance token, anyone will be able to propose changes to the protocol. ",
  },
  {
    title: "Security",
    bg: unparalled_quotes,
    text: "We offer FULL security to all users by being fully non-custodial, open source and decentralized. Users are ALWAYS in control of their own funds.",
  },
  {
    title: "Support",
    bg: unparalled_quotes,
    text: "We offer all users live support on Discord, we also offer documents and tutorials to help you learn and navigate through our platform.",
  },
];

const Benefits = () => {
  const settings = {
    infinite: true,
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
      <p className="mx-8 mt-32 text-4xl font-semibold tracking-wider text-center md:mx-4 md:text-5xl md:mt-0">
        Benefits and Features
      </p>
      <div className="mt-16 xl:ml-40 lg:ml-0">
        <Slider {...settings}>
          {data.map((item, index) => {
            return <BenefitItem data={item} key={index} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Benefits;
