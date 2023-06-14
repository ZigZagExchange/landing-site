import React, { useEffect, useState } from "react";
import axios from "axios";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import BlogItem from "@/components/atomic/BlogItem";
import { TwitterTweetEmbed } from "react-twitter-embed";
// import { useTheme } from "next-themes";
import Button from "@/components/atomic/Button/Button";

/* const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ZigZagExchange"; */

const News = () => {
  const { t, i18n } = useTranslation([COMMON_TNS]);

  const [data, setData] = useState<any>();
  const [loaded, setLoaded] = useState(false);
  // const { theme } = useTheme();

  // useEffect(() => {
  //   axios
  //     .get("/api/tweets")
  //     .then((data: any) => {
  //       console.log(data.data.meta);
  //       // setTweetsId(data.data.meta.newest_id);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

/*   useEffect(() => {
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
  }, []); */

  const onLoadTweet = () => {
    setLoaded(true);
  };

  return (
    <section className={"mt-48 md:px-8"}>
      <p
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-4xl font-extrabold text-center dark:text-slate-50 text-slate-900 md:text-5xl"
      >
        {t("newsandupdates")}
      </p>
      <div className="grid gap-6 mt-16 lg:grid-cols-3 md:grid-cols-1 xl:gap-10">
        <div>
          <TwitterTweetEmbed
            tweetId={"1669006479112716290"}
            options={{
              // cards: "hidden",
              height: 400,
              width: "100%",
              maxWidth: "100%",
            }}
            placeholder={
              <div className="text-lg font-medium font-work text-slate-800 dark:text-slate-200">
                Loading tweet...
              </div>
            }
            onLoad={onLoadTweet}
          />
        </div>
        <div>
          <TwitterTweetEmbed
            tweetId={"1649101307532414978"}
            placeholder={
              <div className="text-lg font-medium font-work text-slate-800 dark:text-slate-200">
                Loading tweet...
              </div>
            }
            onLoad={onLoadTweet}
          />
        </div>
        <div>
          <TwitterTweetEmbed
            tweetId={"1631571511600373766"}
            placeholder={
              <div className="text-lg font-medium font-work text-slate-800 dark:text-slate-200">
                Loading tweet...
              </div>
            }
            onLoad={onLoadTweet}
          />
        </div>
{/*         {loaded && (
          <div className="flex items-center justify-center col-span-1 -mt-4 lg:col-span-3">
            <a
              href="https://docs.zigzag.exchange/zigzag-exchange/twitter-threads"
              rel="noopener noreferrer"
              target="_blank"
              className="!hover:no-underline"
            >
              <Button
                className="px-8 py-2.5 text-base font-semibold  font-work md:w-100 hover:no-underline "
                type="gradient"
              >
                {t("Learn more")}
              </Button>
            </a>
          </div>
        )} */}
        {data &&
          data?.item.slice(0, 3).map((item: any, index: any) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay={100 * (index + 1)}
                key={index}
              >
                <BlogItem data={item} {...data.profile} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default News;
