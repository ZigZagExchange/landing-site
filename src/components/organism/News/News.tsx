import React, { useEffect, useState } from "react";
import classNames from "classnames";
import axios from "axios";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import BlogItem from "@/components/atomic/BlogItem";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { useTheme } from "next-themes";
import socketIOClient from "socket.io-client";

const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ZigZagExchange";

const News = () => {
  const { t, i18n } = useTranslation([COMMON_TNS]);

  const [data, setData] = useState<any>();
  const { theme } = useTheme();

  const streamTweets = () => {
    let socket;

    if (process.env.NODE_ENV === "development") {
      console.log("asdfasdfasdf");
      socket = socketIOClient("http://localhost:3000/");
    } else {
      socket = socketIOClient("/");
    }

    socket.on("connect", () => {});
    socket.on("tweet", (json) => {
      if (json.data) {
        // dispatch({ type: "add_tweet", payload: json });
        console.log("add_tweet", json);
      }
    });
    socket.on("heartbeat", (data) => {
      // dispatch({ type: "update_waiting" });
      console.log("update_waiting");
    });
    socket.on("error", (data) => {
      // dispatch({ type: "show_error", payload: data });
      console.log("show_error", data);
    });
    socket.on("authError", (data) => {
      console.log("data =>", data);
      // dispatch({ type: "add_errors", payload: [data] });
      console.log("add_errors", [data]);
    });
  };

  useEffect(() => {
    streamTweets();
  }, []);

  useEffect(() => {
    axios
      .get(mediumURL)
      .then((data: any) => {
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item: any) => item.categories.length > 0);

        const title = data.data.feed.title;
        let d: any = {};
        d.profile = {};
        d.profile.ptitle = title;
        d.profile.avtar = avatar;
        d.profile.profileurl = profileLink;
        d.item = posts;
        d.isLoading = false;
        d.error = null;
        setData(d);
      })
      .catch((e) => {
        setData({ error: e.toJSON() });
        console.log(e);
      });
  }, []);

  return (
    <section className={"mt-48 md:px-8"}>
      <p className="text-4xl font-extrabold text-center dark:text-slate-50 text-slate-900 md:text-5xl">
        {t("newsandupdates")}
      </p>
      <div className="grid gap-5 mt-16 lg:grid-cols-3 md:grid-cols-1 xl:gap-10">
        {/* {
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="ZigZagExchange"
            autoHeight
            theme={theme === "dark" ? "dark" : "light"}
            noScrollbar={true}
          />
        } */}
        {data &&
          data?.item.slice(0, 2).map((item: any, index: any) => {
            return <BlogItem data={item} {...data.profile} key={index} />;
          })}
      </div>
    </section>
  );
};

export default News;
