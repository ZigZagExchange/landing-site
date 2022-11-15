/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { COMMON_TNS } from "@/lib/i18n/consts";
import Button from "@/components/atomic/Button/Button";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Trans, useTranslation } from "react-i18next";
import styles from "./FAQ.module.css";
import classNames from "classnames";

type props = {
  rollupOpen: boolean;
  setRollupOpen: () => void;
};

// eslint-disable-next-line react/display-name
const FAQ = React.forwardRef<any, props>(
  ({ rollupOpen, setRollupOpen }, ref) => {
    const { t } = useTranslation([COMMON_TNS]);

    return (
      <section
        ref={ref}
        className={classNames(
          styles.faq,
          "grid md:grid-cols-5 lg:gap-4 md:gap-0 mt-52 md:px-8 grid-cols-1"
        )}
      >
        <div className="md:col-start-1 md:col-end-3">
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-4xl font-extrabold text-left dark:text-slate-50 text-slate-900 md:text-5xl"
          >
            {t("FAQ")}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            className="mt-8 text-lg font-medium leading-8 text-left font-work text-slate-800 dark:text-slate-200"
          >
            <Trans
              t={t}
              i18nKey="faqdescription"
              components={{
                1: (
                  <a
                    href="https://discord.com/invite/zigzag"
                    className="text-[#57F287] !hover:text-red-900 font-work font-medium hover:underline-offset-2 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                ),
              }}
            />
          </p>
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
            <a
              href="https://docs.zigzag.exchange/"
              rel="noopener noreferrer"
              target="_blank"
              className="!hover:no-underline inline-block"
            >
              <Button className="flex gap-1 py-2 mt-4 text-base font-semibold border-2 rounded-lg whitespace-nowrap dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                {t("Documentation")}
                <HiOutlineExternalLink className="w-3 h-3" />
              </Button>
            </a>
          </div>
        </div>
        <div className="col-span-2 md:col-end-6 ">
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="900"
          >
            <Disclosure>
              {({ open }) => (
                <div className="mt-5 text-left border-2 rounded-2xl dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200">
                  <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-left font-work dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                    {t("What is ZigZag?")}
                    {open ? (
                      <MinusIcon
                        className="p-1 border rounded-full border-foreground-400 w-7 h-7"
                        aria-hidden="true"
                      />
                    ) : (
                      <PlusIcon
                        className="p-1 border rounded-full border-foreground-400 w-7 h-7"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-5 pb-3 text-base font-normal leading-6 whitespace-pre-line font-work">
                      <Trans
                        t={t}
                        i18nKey="zigzag is a decentralized"
                        components={{
                          1: (
                            <a
                              href="https://docs.zigzag.exchange/chains/zksync-1.0/zksync-1.0-guide"
                              className="text-[#57F287] !hover:text-red-900 font-work font-medium hover:underline-offset-2 hover:underline"
                              rel="noopener noreferrer"
                              target="_blank"
                            />
                          ),
                        }}
                      />
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="1100"
          >
            <Disclosure>
              {() => (
                <div className="mt-5 text-left border-2 rounded-2xl dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200">
                  <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-left font-work dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                    <button
                      onClick={setRollupOpen}
                      className="flex items-center justify-between w-full text-xl font-semibold text-left font-work dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200"
                    >
                      {t("What are ZK Rollups?")}
                      {rollupOpen ? (
                        <MinusIcon
                          className="p-1 border rounded-full border-foreground-400 w-7 h-7"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="p-1 border rounded-full border-foreground-400 w-7 h-7"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </Disclosure.Button>
                  <Transition
                    show={rollupOpen}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-5 pb-3 text-base font-normal leading-6 whitespace-pre-line font-work">
                      <Trans
                        t={t}
                        i18nKey="zk-rollups are one of the options"
                        components={{
                          1: (
                            <a
                              href="https://docs.zigzag.exchange/chains/zksync-1.0/zksync-1.0-guide"
                              className="text-[#57F287] !hover:text-red-900 font-work font-medium hover:underline-offset-2 hover:underline"
                              rel="noopener noreferrer"
                              target="_blank"
                            />
                          ),
                        }}
                      />
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="1300"
          >
            <Disclosure>
              {({ open }) => (
                <div className="mt-5 text-left border-2 rounded-2xl dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200">
                  <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-left font-work dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                    {t("What is zkSync?")}
                    {open ? (
                      <MinusIcon
                        className="p-1 border rounded-full border-foreground-400 w-7 h-7"
                        aria-hidden="true"
                      />
                    ) : (
                      <PlusIcon
                        className="p-1 border rounded-full border-foreground-400 w-7 h-7"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-5 pb-3 text-base font-normal leading-6 whitespace-pre-line font-work">
                      <Trans
                        t={t}
                        i18nKey="zksync is a trustless protocol"
                        components={{
                          1: (
                            <a
                              href="https://docs.zigzag.exchange/chains/zksync-1.0/zksync-1.0-guide"
                              className="text-[#57F287] !hover:text-red-900 font-work font-medium hover:underline-offset-2 hover:underline"
                              rel="noopener noreferrer"
                              target="_blank"
                            />
                          ),
                        }}
                      />
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="1500"
          >
            <Disclosure>
              {({ open }) => (
                <div className="mt-5 text-left border-2 rounded-2xl dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200">
                  <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-left font-work dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                    {t("How can I start using ZigZag?")}
                    {open ? (
                      <MinusIcon
                        className="p-1 border rounded-full border-foreground-400 w-7 h-7"
                        aria-hidden="true"
                      />
                    ) : (
                      <PlusIcon
                        className="p-1 border rounded-full border-foreground-400 w-7 h-7"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-5 pb-3 text-base font-normal leading-6 whitespace-pre-line font-work">
                      <Trans
                        t={t}
                        i18nKey="To start using zigzag"
                        components={{
                          1: (
                            <a
                              href="https://twitter.com/zigzagkedar/status/1580249833352220673"
                              className="text-[#57F287] !hover:text-red-900 font-work font-medium hover:underline-offset-2 hover:underline"
                              rel="noopener noreferrer"
                              target="_blank"
                            />
                          ),
                          2: (
                            <a
                              href="https://twitter.com/ZigZagExchange/status/1584945659664551936"
                              className="text-[#57F287] !hover:text-red-900 font-work font-medium hover:underline-offset-2 hover:underline"
                              rel="noopener noreferrer"
                              target="_blank"
                            />
                          ),
                          3: (
                            <a
                              href="https://docs.zigzag.exchange/chains/zksync-1.0/zksync-1.0-guide"
                              className="text-[#57F287] !hover:text-red-900 font-work font-medium hover:underline-offset-2 hover:underline"
                              rel="noopener noreferrer"
                              target="_blank"
                            />
                          ),
                        }}
                      />
                      {/* {t("To start using zigzag")} */}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </section>
    );
  }
);

export default FAQ;
