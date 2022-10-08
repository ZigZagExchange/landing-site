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
        "flex items-start justify-center mx-4 duration-300 ease-in bg-gradient-to-r from-primary-600 to-secondary-600"
      )}
      style={
        !over
          ? {
              backgroundImage: `url(${data.bg.src})`,
            }
          : {}
      }
    >
      <p className="absolute text-base font-semibold top-4 left-5 font-work">
        {data.title}
      </p>
      {over && (
        <p className="p-5 text-xs font-normal leading-5 tracking-wider text-left duration-300 ease-out font-work pt-14 ">
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
