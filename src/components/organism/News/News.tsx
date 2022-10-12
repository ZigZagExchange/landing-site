import React, { useEffect, useState } from "react";
import classNames from "classnames";
import axios from "axios";
import { NEWS_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import BlogItem from "@/components/atomic/BlogItem";

const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ZigZagExchange";

const News = () => {
  const { t, i18n } = useTranslation([NEWS_TNS]);

  const [data, setData] = useState<any>();

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
    <section className={"mt-48"}>
      <p className="text-4xl font-semibold tracking-wider text-center md:text-5xl">
        {t("newsandupdates")}
      </p>
      <div className="grid grid-cols-3 gap-10 mt-16">
        {data &&
          data?.item.slice(0, 3).map((item: any, index: any) => {
            return <BlogItem data={item} {...data.profile} key={index} />;
          })}
      </div>
    </section>
  );
};

export default News;
