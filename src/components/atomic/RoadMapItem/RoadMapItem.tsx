import classNames from "classnames";
import React from "react";

import styles from "./roadMapItem.module.css";

const RoadMapItem = ({ data }: any) => {
  return (
    <div
      className={classNames(
        styles.roadMapItem,
        "text-left border rounded-2xl border-foreground-400 p-5 bg-foreground-100 shadow-xl backdrop-blur-md"
      )}
    >
      <p className="text-base font-light tracking-wider font-work">
        {data.date}
      </p>
      <p className="mt-2 text-lg font-semibold tracking-wider font-work">
        {data.title}
      </p>
      <p className="mt-2 text-base font-light tracking-wider font-work">
        {data.text}
      </p>
    </div>
  );
};

export default RoadMapItem;
