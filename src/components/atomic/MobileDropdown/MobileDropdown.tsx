import { Fragment } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";
// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

type MobileDropdownProps = {
  options: Array<{ value: string; label: string }>;
  className?: any;
};

export default function Dropdown({ options, className }: MobileDropdownProps) {
  return (
    <Menu
      as="div"
      className={classNames("relative inline-block text-left", className)}
    >
      <div>
        <Menu.Button className="inline-flex justify-center py-2 text-sm font-semibold uppercase bg-transparent rounded-md shadow-sm font-work">
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
            return (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? " text-gray-900" : "text-gray-700",
                      "flex px-4 py-2 text-sm text-gray-900 items-center"
                    )}
                  >
                    <div className="flex items-center justify-center p-2 mr-3 border rounded-full border-foreground-400">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={14}
                        height={14}
                      />
                    </div>
                    {item.label}
                  </a>
                )}
              </Menu.Item>
            );
          })}
          <div className="h-px mx-4 my-2 bg-foreground-400"></div>
          <Menu.Item
            key="social"
            as="div"
            className="flex justify-between mx-4 my-4"
          >
            <FaDiscord
              className="cursor-pointer text-foreground-900 hover:text-gray-100"
              size={22}
            />
            <FaTwitter
              className="cursor-pointer text-foreground-900 hover:text-gray-100"
              size={22}
            />
            <FaTelegram
              className="cursor-pointer text-foreground-900 hover:text-gray-100"
              size={22}
            />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
