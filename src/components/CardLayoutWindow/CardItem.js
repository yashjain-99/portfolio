import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../Card";
import { GithubLogoProject, WebLogo } from "../Assets";

const CardItem = ({
  dataItem,
  index,
  page,
  direction,
  expandedIndex,
  setExpandedIndex,
  cardItemClassName,
}) => {
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 500 : -500,
        opacity: 0,
      };
    },
  };

  return (
    <div className={cardItemClassName}>
      <AnimatePresence key={`${dataItem.heading}-${index}-${page}`}>
        <motion.div
          custom={direction}
          variants={variants}
          key={`${dataItem.heading}-${index}-${page}`}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          <Card appliedClassName="h-full w-full overflow-hidden flex flex-row">
            <div className="pt-4 pb-7 px-5 sm:pt-10 sm:min-w-[50%] flex flex-col h-full">
              <h3 className="text-2xl font-semibold">{dataItem.heading}</h3>
              {dataItem.subHeading && (
                <h4 className=" text-lg font-medium">
                  - {dataItem.subHeading}
                </h4>
              )}
              <div className=" mb-2">
                {typeof dataItem.description === "string" ? (
                  <p
                    className={`mt-2 mb-1 leading-relaxed text-white/70 text-ellipsis ${
                      expandedIndex === index
                        ? "overflow-auto h-[70%]"
                        : "overflow-hidden"
                    }`}
                  >
                    {expandedIndex === index ||
                    dataItem.description.length < 200 ||
                    !dataItem.ss
                      ? dataItem.description
                      : `${dataItem.description.slice(0, 200)}...`}
                  </p>
                ) : (
                  dataItem.description
                )}
                {typeof dataItem.description === "string" &&
                  dataItem.description.length > 200 &&
                  dataItem.ss && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                    >
                      {expandedIndex === index ? " Read Less" : " Read More"}
                    </span>
                  )}
              </div>
              <ul className="flex flex-wrap gap-2 items-center">
                {dataItem.tags &&
                  dataItem.tags.map((tag, index) => {
                    return (
                      <li
                        key={`${dataItem.heading}-${index}`}
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-default hover:bg-primary-icon-selected-color"
                      >
                        {tag}
                      </li>
                    );
                  })}
              </ul>
              {!dataItem.ss && (
                <div className="flex ml-1 gap-2 mt-2">
                  {dataItem.web && (
                    <a
                      href={dataItem.web}
                      target="_blank"
                      className="w-7 h-7 fill-white hover:fill-primary-icon-selected-color"
                    >
                      {WebLogo}
                    </a>
                  )}
                  {dataItem.github && (
                    <a
                      href={dataItem.github}
                      target="_blank"
                      className="w-7 h-7 fill-white hover:fill-primary-icon-selected-color"
                    >
                      {GithubLogoProject}
                    </a>
                  )}
                </div>
              )}
            </div>
            {dataItem.ss && (
              <div className="flex flex-col justify-between lg:my-4 lg:rounded-l-2xl lg:overflow-hidden lg:min-w-[50%]">
                <div className="hidden lg:block max-h-[90%] max-w-0">
                  <img
                    src={dataItem.ss}
                    className=" max-w-none h-full object-cover max-h-96"
                    alt={`Screenshot of ${dataItem.heading}`}
                  />
                </div>
                <div className="flex flex-row-reverse mr-1 gap-2">
                  {dataItem.web && (
                    <a
                      href={dataItem.web}
                      target="_blank"
                      className="w-6 h-6 fill-white hover:fill-primary-icon-selected-color"
                    >
                      {WebLogo}
                    </a>
                  )}
                  {dataItem.github && (
                    <a
                      href={dataItem.github}
                      target="_blank"
                      className="w-6 h-6 fill-white hover:fill-primary-icon-selected-color"
                    >
                      {GithubLogoProject}
                    </a>
                  )}
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CardItem;
