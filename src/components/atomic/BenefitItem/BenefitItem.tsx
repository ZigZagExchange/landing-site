import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import styles from "./benefitItem.module.css";

type BenefitItemProps = {
  data: { title: string; bg: any; text: string };
};

const BenefitItem = ({ data }: BenefitItemProps) => {
  const [over, setOver] = useState(false);

  const onMouseOver = () => {
    setOver(true);
  };

  const onMouseleave = () => {
    setOver(false);
  };

  return (
    <div
      className={classNames(
        styles.benefitItem,
        "duration-300 ease-in bg-gradient-to-r from-primary-600 to-secondary-600 h-72"
      )}
      style={
        !over
          ? {
              backgroundImage: `url(${data.bg.src})`,
            }
          : {}
      }
    >
      <p className="p-4 text-base font-medium tracking-wider text-left font-work">
        {data.title}
      </p>
      {over && (
        <p className="p-4 pt-3 text-base font-normal leading-5 tracking-wider text-left duration-300 ease-out font-work ">
          {data.text}
        </p>
      )}
      <p
        className="absolute flex items-center text-xs font-semibold cursor-pointer bottom-3 font-work text-primary-900 hover:text-primary-800 right-3"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseleave}
      >
        Read More
        <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
      </p>
    </div>
  );
};

export default BenefitItem;
