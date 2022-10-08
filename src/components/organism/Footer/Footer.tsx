import classNames from "classnames";
import React from "react";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div
      className={classNames(
        styles.footer,
        "flex md:flex-row z-10 flex-col dark:bg-background-700 px-5 py-6 justify-center items-center md:justify-between"
      )}
    >
      <div className="flex">
        <div className="mr-6 text-xs dark:text-foreground-700">
          ZigZag Exchange © 2022
        </div>
        <div className="mr-6 text-xs dark:text-foreground-700">Contact</div>
      </div>
      <div className="flex gap-6 mt-10 md:mt-0">
        <FaDiscord
          className="cursor-pointer dark:text-gray-400 dark:hover:text-gray-100 hover:text-background-800"
          size={18}
        />
        <FaTwitter
          className="cursor-pointer dark:text-gray-400 dark:hover:text-gray-100 hover:text-background-800"
          size={18}
        />
        <FaTelegram
          className="cursor-pointer dark:text-gray-400 dark:hover:text-gray-100 hover:text-background-800"
          size={18}
        />
        <div className="mr-6 text-xs dark:text-foreground-700">
          Powered by zkSync
        </div>
      </div>
    </div>
  );
};

export default Footer;
