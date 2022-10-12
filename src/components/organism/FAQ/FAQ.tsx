import { NextPage } from "next";
import React, { useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FAQ_TNS } from "@/lib/i18n/consts";
import Button from "@/components/atomic/Button/Button";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { Trans, useTranslation } from "react-i18next";
import styles from "./FAQ.module.css";
import classNames from "classnames";

const data = [
  {
    title: "What is ZigZag?",
    description:
      "ZigZag is a decentralized non-custodial order book exchange, powered by zk-rollups. This allows our users to seamlessly and securely trade with near-zero fees all while providing centralized exchange like quotes on all size trades. We also aim to provide the flawless functionality, experience and optimal liquidity centralized exchanges do all while being fully decentralized.",
  },
  {
    title: "What are ZK Rollups?",
    description:
      "ZK-Rollups are one of the options being developed for layer 2 construction to increase the scalability of Ethereum. All funds are held by a smart contract on the mainchain, while computation and storage are performed off-chain. The main idea is that instead of verifying each transaction separately, transactions are 'rolled up' to a single item (the rollup block), which is then being verified, approving all them simultaneously.",
  },
  {
    title: "What is zkSync?",
    description:
      "zkSync is a trustless protocol for scalable low-cost payments on Ethereum, powered by zkRollup technology. It uses zero-knowledge proofs and on-chain data availability to keep users' funds as safe as though they never left the mainnet.",
  },
  {
    title: "How can I start using ZigZag?",
    description:
      "To start using ZigZag, you will first have to connect your Web3 wallet to our application. You’ll then have to bridge funds over and activate your zkSync account, this includes a one-time transaction of roughly ~10$. To do so head over to ZigZag Bridge or zkSync bridge.",
  },
];

const FAQ: NextPage = () => {
  const { t } = useTranslation([FAQ_TNS]);

  return (
    <section className={classNames(styles.faq, "grid grid-cols-5 gap-4 mt-52")}>
      <div className="col-start-1 col-end-3">
        <p className="text-4xl font-semibold tracking-wider text-left md:text-5xl">
          {t("FAQ")}
        </p>
        <p className="mt-4 text-base font-light leading-6 tracking-wider text-left md:text-xl">
          <Trans
            t={t}
            i18nKey="faqdescription"
            components={{ 1: <a href="#" /> }}
          />
        </p>
        <div>
          <Button className="px-6 py-2 mt-5 text-base font-bold uppercase border border-gray-500 rounded-lg dark:text-foreground-900 text-background-50 hover:opacity-75 font-work">
            {t("View THE Docs")}
          </Button>
        </div>
      </div>
      <div className="col-span-2 col-end-6">
        {data.map((item, index) => {
          return (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="mt-5 text-left border rounded-2xl dark:border-foreground-400 border-background-600">
                  <Disclosure.Button className="flex items-center justify-between w-full px-5 py-5 text-2xl font-normal text-left font-work">
                    {item.title}
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
                    <Disclosure.Panel className="px-5 pb-3 text-base leading-6 tracking-wider">
                      {item.description}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
