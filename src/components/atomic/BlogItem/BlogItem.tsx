import React from "react";

import moment from "moment";
import { HiCalendar } from "react-icons/hi";

const BlogItem = ({ data, ...props }: any) => {
  function ToText(node: any) {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  }

  return (
    <>
      <div className="relative flex flex-col col-span-1 rounded-lg shadow-lg bg-gradient-to-r from-primary-600 to-secondary-600">
        <div
          className="relative h-64 bg-no-repeat bg-cover rounded-tl-lg rounded-tr-lg"
          style={{ backgroundImage: `url(${data.thumbnail})` }}
        />

        <div className="flex flex-wrap p-6 ">
          <div className="flex flex-wrap items-center gap-2 ">
            {data?.categories.slice(0, 2).map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="text-sm text-white-900 bg-success-600 px-2.5 py-1 rounded-2xl font-work"
                >
                  {item}
                </div>
              );
            })}
          </div>
          <a
            href={data.link}
            className="mt-4 text-2xl !font-semibold font-work"
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.title}
          </a>

          <p className="mt-4 mb-10 font-normal font-work text-foreground-800">{`${ToText(
            data.description.substring(0, 300)
          )}...`}</p>

          <span className="absolute flex items-center gap-2 text-sm text-gray-300 bottom-5">
            <HiCalendar className="w-5 h-5" />{" "}
            {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
