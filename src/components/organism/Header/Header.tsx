import { Fragment, useState, useEffect } from "react";
import { COMMON_TNS } from "@/lib/i18n/consts";
import LinkText from "@/components/atomic/LinkText/LinkText";
import { Listbox, Transition } from "@headlessui/react";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";
import {
  MoonIcon,
  SunIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./header.module.css";
import { useTheme } from "next-themes";
import React from "react";
import { useRouter } from "next/router";
import Dropdown from "@/components/atomic/Dropdown/Dropdown";
import MobileDropdown from "@/components/atomic/MobileDropdown/MobileDropdown";
import Button from "@/components/atomic/Button/Button";
import Link from "next/link";

type HeaderProps = {};

/** Make sure to pass GLOSSARY_TNS and COMMON_TNS to where it is called */
export const Header: React.FC<HeaderProps> = (props) => {
  //const { children } = props;
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const { t, i18n } = useTranslation([COMMON_TNS]);

  const [isMounted, setIsMounted] = useState(false);
  const [selected, setSelected] = useState(router.locale);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSelectLang = (value: any) => {
    //TODO as hook
    const l = value;
    i18n.changeLanguage(l);
    router.push(router.route, undefined, { locale: l });
    setSelected(value);
  };

  const fiatOptions = [
    { value: "usd", label: "USD" },
    { value: "euro", label: "EURO" },
  ];

  const supportOptions = [
    { value: "helpcenter", label: "Help Center" },
    { value: "documents", label: "Documents" },
    { value: "community", label: "Community Support" },
    { value: "governance", label: "Governance" },
  ];

  const labsOptions = [
    { value: "mammoth_pool", label: "Mammoth pool" },
    { value: "NFT_marketplace", label: "NFT Marketplace" },
    { value: "ZKasino", label: "ZKasino" },
    { value: "invisibl3", label: "Invisibl3" },
    { value: "oracle", label: "Oracle" },
  ];

  const mobileOptions = [
    { value: "fiat", label: "FIAT", icon: "/assets/dollar.svg" },
    { value: "docs", label: "Docs", icon: "/assets/docs.svg" },
    { value: "faq", label: "FAQ", icon: "/assets/faq.svg" },
  ];

  if (!isMounted) return null;

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-40 flex-none w-full px-4 transition-colors duration-500 backdrop-blur lg:z-50 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <div className="flex items-center justify-between h-20 m-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl ">
          <div className="flex items-center ">
            <Link href="/" passHref={true}>
              <Image
                src="/assets/logo.svg"
                alt="Vercel Logo"
                width={25}
                height={32}
              />
            </Link>
            <Dropdown
              btnText={t("fiat")}
              options={fiatOptions}
              className="hidden lg:ml-4 xl:ml-7 lg:block"
            />
            <Dropdown
              btnText={"Support"}
              options={supportOptions}
              className="hidden lg:ml-0 xl:ml-7 lg:block"
            />
            <LinkText
              href="https://blog.zigzag.exchange/"
              className="hidden py-2 text-sm font-semibold uppercase lg:ml-0 xl:ml-7 font-work lg:block"
            >
              BLOG
            </LinkText>
            <LinkText
              href="/contact"
              className="hidden py-2 text-sm font-semibold uppercase lg:ml-4 xl:ml-10 font-work lg:block"
            >
              Contact
            </LinkText>
            <Dropdown
              btnText={"ZigZag Labs"}
              options={labsOptions}
              className="hidden lg:ml-0 xl:ml-7 lg:block"
            />
            <div className="lg:hidden ml-7">
              <MobileDropdown options={mobileOptions} />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="hidden gap-6 lg:flex">
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
            </div>
            <div className="flex items-center ml-6 lg:border-l lg:border-gray-500">
              <Listbox value={selected} onChange={handleSelectLang}>
                <div className="relative">
                  <Listbox.Button className="relative w-full py-1 pl-3 pr-8 ml-2 text-left bg-transparent rounded-lg cursor-pointer">
                    <span className="block uppercase">{router.locale}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDownIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-hidden border rounded-md shadow-lg dark:bg-background-800 bg-foreground-900 dark:border-foreground-400 max-h-60 sm:text-sm">
                      {router.locales?.map((local, localIdx) => (
                        <Listbox.Option
                          key={localIdx}
                          className={({ active }) =>
                            `cursor-pointer relative py-2 pl-10 pr-8 ${
                              active
                                ? "  dark:hover:text-foreground-800 horver:text-background-800"
                                : " dark:hover:text-foreground-800 horver:text-background-800"
                            }`
                          }
                          value={local}
                        >
                          {({ selected }) => {
                            return (
                              <>
                                <span
                                  className={`block uppercase ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {local}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <CheckIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            );
                          }}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <div className="px-4">
                {theme === "dark" ? (
                  <SunIcon
                    className="w-5 h-5 text-white cursor-pointer"
                    onClick={switchTheme}
                  />
                ) : (
                  <MoonIcon
                    className="w-5 h-5 cursor-pointer"
                    onClick={switchTheme}
                  />
                )}
              </div>
            </div>

            <div className="border-l border-gray-500">
              <Button
                className="ml-8 text-xs font-bold uppercase"
                type="gradient"
              >
                Start Trading
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
