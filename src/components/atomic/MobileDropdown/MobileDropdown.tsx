import { Fragment } from "react";
import classNames from "classnames";
import { COMMON_TNS } from "@/lib/i18n/consts";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { FaDiscord, FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";
// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

type MobileDropdownProps = {
  options: Array<{ value: string; label: string }>;
  className?: any;
};

export default function Dropdown({ options, className }: MobileDropdownProps) {
  const { t, i18n } = useTranslation([COMMON_TNS]);

  return (
    <Menu
      as="div"
      className={classNames("relative inline-block text-left", className)}
    >
      <div>
        <Menu.Button className="inline-flex justify-center py-2 text-sm font-semibold bg-transparent rounded-md shadow-sm font-work">
          <MenuIcon className="w-5 h-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute pt-2 mt-2 origin-top-right border rounded-md shadow-lg w-44 dark:bg-background-900 dark:border-foreground-400 center ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((item: any, index) => {
            return item.value === "contact" ? (
              <Link href={item.url}>
                <a
                  rel="noopener noreferrer"
                  className={
                    "flex px-4 py-2 text-sm items-center text-foreground-900 font-work !font-normal"
                  }
                >
                  {item.label}
                </a>
              </Link>
            ) : (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={classNames(
                      active ? " " : "",
                      "flex px-4 py-2 text-sm items-center text-foreground-900 font-work !font-normal"
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </Menu.Item>
            );
          })}
          <div className="h-px mx-2 my-2 bg-foreground-400"></div>
          <Menu.Item
            key="social"
            as="div"
            className="flex justify-between mx-4 my-4"
          >
            <a
              href="https://twitter.com/ZigZagExchange"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter
                className="cursor-pointer text-foreground-900 hover:text-gray-100"
                size={22}
              />
            </a>
            <a
              href="https://github.com/ZigZagExchange"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub
                className="cursor-pointer text-foreground-900 hover:text-gray-100"
                size={22}
              />
            </a>
            <a
              href="https://discord.com/invite/zigzagexchange"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaDiscord
                className="cursor-pointer text-foreground-900 hover:text-gray-100"
                size={22}
              />
            </a> 

            <a
              href="https://t.me/zigzagexchange"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTelegram
                className="cursor-pointer text-foreground-900 hover:text-gray-100"
                size={22}
              />
            </a>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
