/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FAQ_TNS } from "@/lib/i18n/consts";
import Button from "@/components/atomic/Button/Button";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
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
    const { t } = useTranslation([FAQ_TNS]);

    return (
      <section
        ref={ref}
        className={classNames(
          styles.faq,
          "grid md:grid-cols-5 lg:gap-4 md:gap-0 mt-52 md:px-8 grid-cols-1"
        )}
      >
        <div className="md:col-start-1 md:col-end-3">
          <p className="text-4xl font-extrabold text-left dark:text-slate-50 text-slate-900 md:text-5xl">
            {t("FAQ")}
          </p>
          <p className="mt-8 text-lg font-medium leading-8 text-left font-work text-slate-800 dark:text-slate-200">
            <Trans
              t={t}
              i18nKey="faqdescription"
              components={{
                1: (
                  <a
                    href="https://t.co/yk7f1m0nmE"
                    className="text-[#57F287] !hover:text-red-900 font-work font-medium hover:underline-offset-2 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                ),
              }}
            />
          </p>
          <div>
            <Button className="py-1 mt-3 text-base font-semibold border-2 rounded-lg whitespace-nowrap text-slate-800 border-slate-700 dark:border-slate-400 font-work dark:text-slate-300 hover:dark:border-foreground-900 hover:dark:text-foreground-900">
              {t("VIEW THE DOCS")}
            </Button>
          </div>
        </div>
        <div className="col-span-2 md:col-end-6 ">
          <Disclosure>
            {({ open }) => (
              <div className="mt-5 text-left border-2 rounded-2xl dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-left font-work ">
                  What is ZigZag?
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
                  <Disclosure.Panel className="px-5 pb-3 text-base font-normal leading-6 font-work ">
                    ZigZag is a decentralized non-custodial order book exchange,
                    powered by zk-rollups. This allows our users to seamlessly
                    and securely trade with near-zero fees all while providing
                    centralized exchange like quotes on all size trades. We also
                    aim to provide the flawless functionality, experience and
                    optimal liquidity centralized exchanges do all while being
                    fully decentralized.
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure>
            {() => (
              <div className="mt-5 text-left border-2 rounded-2xl dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-left font-work dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                  <button
                    onClick={setRollupOpen}
                    className="flex items-center justify-between w-full text-xl font-semibold text-left font-work dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200"
                  >
                    What are ZK Rollups?
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
                  <Disclosure.Panel className="px-5 pb-3 text-base font-normal leading-6 font-work">
                    ZK-Rollups are one of the options being developed for layer
                    2 construction to increase the scalability of Ethereum. All
                    funds are held by a smart contract on the mainchain, while
                    computation and storage are performed off-chain. The main
                    idea is that instead of verifying each transaction
                    separately, transactions are 'rolled up' to a single item
                    (the rollup block), which is then being verified, approving
                    all them simultaneously.
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <div className="mt-5 text-left border-2 rounded-2xl dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-left font-work ">
                  What is zkSync?
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
                  <Disclosure.Panel className="px-5 pb-3 text-base font-normal leading-6 font-work">
                    zkSync is a trustless protocol for scalable low-cost
                    payments on Ethereum, powered by zkRollup technology. It
                    uses zero-knowledge proofs and on-chain data availability to
                    keep users' funds as safe as though they never left the
                    mainnet.
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <div className="mt-5 text-left border-2 rounded-2xl dark:hover:border-sky-400 hover:border-sky-500 border-slate-800 dark:border-slate-200 dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200">
                <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-left font-work ">
                  How can I start using ZigZag?
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
                  <Disclosure.Panel className="px-5 pb-3 text-base font-normal leading-6 font-work">
                    To start using ZigZag, you will first have to connect your
                    Web3 wallet to our application. You’ll then have to bridge
                    funds over and activate your zkSync account, this includes a
                    one-time transaction of roughly ~10$. To do so head over to
                    ZigZag Bridge or zkSync bridge.
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        </div>
      </section>
    );
  }
);

export default FAQ;
