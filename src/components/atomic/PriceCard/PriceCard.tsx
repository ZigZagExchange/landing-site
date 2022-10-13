import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { VictoryLine } from "victory";
import styles from "./priceCard.module.css";
import Image from "next/image";

type priceCardProps = {
  className?: string;
  symbol: string;
  name: string;
  title?: string;
  fillColor: string;
  logo?: string;
};

let cx = classNames.bind(styles);

const PriceCard = ({
  className,
  symbol,
  name,
  fillColor,
  title,
  logo,
}: priceCardProps) => {
  const [data, setData] = useState<any>();
  const [priceData, setPriceData] = useState();
  const { theme } = useTheme();
  console.log(theme);
  let clsNames = cx({
    priceCardBTC: symbol === "BTC",
    priceCardMatic: symbol === "ZZ",
    priceCardETH: symbol === "ETH",
  });

  let clsLightNames = cx({
    priceLightCardBTC: symbol === "BTC",
    priceLightCardMatic: symbol === "ZZ",
    priceLightCardETH: symbol === "ETH",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${name.toLowerCase()}`
        );
        let p = await response.json();
        setData(p);
        const p_response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${name.toLowerCase()}/market_chart?vs_currency=usd&days=1`
        );
        let d = await p_response.json();
        const l = d?.prices.map((item: any) => ({
          x: item[0],
          y: item[1],
        }));
        setPriceData(l);
      } catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(() => {
      fetchData(); // <-- (3) invoke in interval callback
    }, 60000);

    fetchData(); // <-- (2) invoke on mount

    return () => clearInterval(id);
  }, [name]);

  const formatPrice = (price: any) => {
    const formatConfig = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    return formatConfig.format(price);
  };

  const formatPlusMinus = (priceChange: any) => {
    const isPositive = Math.sign(priceChange) >= 0;

    return (
      <p
        className={`font-normal font-work text-base ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {`${isPositive ? "+" : ""}${priceChange?.toFixed(2)}%`}
      </p>
    );
  };

  return (
    <div
      className={classNames(
        styles.priceCard,
        // theme === "dark" ? clsNames : clsLightNames,
        clsNames,
        className,
        "flex items-center relative md:w-56 md:h-48 w-100 h-48 rounded-xl shadow-2xl"
      )}
    >
      <div className="absolute flex items-center gap-3 top-4 left-4">
        {data && (
          <Image
            src={logo ? logo : data?.image?.large}
            alt="Vercel Logo"
            width={32}
            height={32}
          />
        )}
        <div>
          <p className="text-base font-work font-semiBold">{symbol}</p>
          <p className="text-xs font-normal tracking-wider text-gray-400 capitalize font-work">
            {title ? title : name}
          </p>
        </div>
      </div>
      <div className="mt-4">
        {priceData && (
          <VictoryLine
            style={{
              data: {
                stroke: fillColor,
                strokeWidth: 3,
              },
            }}
            width={380}
            height={180}
            data={priceData}
          />
        )}
      </div>
      <div className="absolute flex justify-between bottom-4 left-4 right-4">
        <p className="text-base font-semibold font-work">
          {formatPrice(data?.market_data?.current_price?.usd)}
        </p>
        {formatPlusMinus(data?.market_data?.price_change_percentage_24h)}
      </div>
    </div>
  );
};

export default PriceCard;
