import { Fragment } from "react";
import classNames from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

type DropdownProps = {
  btnText: string;
  options: Array<{ value: string; label: string }>;
  className?: any;
};

export default function Dropdown({
  btnText,
  options,
  className,
}: DropdownProps) {
  return (
    <Menu
      as="div"
      className={classNames("relative inline-block text-left", className)}
    >
      <div>
        <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold leading-6 bg-transparent rounded-md dark:hover:text-sky-400 hover:text-sky-500 font-work text-slate-800 dark:text-slate-200">
          {btnText}
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
        <Menu.Items className="absolute w-56 mt-2 origin-top-right border rounded-md shadow-lg dark:bg-background-900 bg-foreground-900 dark:border-foreground-400 center ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((item: any, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? " text-background-900" : "text-background-900",
                        "block px-4 py-2 text-sm dark:text-foreground-800 hover:dark:text-foreground-900 text-background-900 hover:underline hover:underline-offset-2"
                      )}
                    >
                      {item.label}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
