import React from "react";
import { motion } from "framer-motion";

const Tabs = ({ columns, selectedTab, handleTabChange, layoutId }) => {
  return (
    <nav className=" sm:p-2 m-4 border flex bg-secondary-background-color border-primary-border-color rounded-lg items-center justify-center">
      <ul className="flex flex-row gap-3 sm:gap-4">
        {columns.map((column, index) => (
          <li
            key={`${column.columnName}-${index}`}
            className={`relative h-full px-3 py-2 sm:p-3 group/column`}
          >
            <a
              onClick={() => handleTabChange(column.alias)}
              className={`cursor-pointer ${
                column.alias === selectedTab
                  ? "font-bold text-white"
                  : " text-[#858585]"
              } group-hover/column:text-white`}
            >
              <div className="relative z-10 sm:p-3 flex flex-row gap-1">
                {column.logo && (
                  <div
                    className={`w-5 h-5 ${
                      column.alias === selectedTab
                        ? "fill-primary-icon-selected-color"
                        : "fill-[#858585]"
                    } group-hover/column:fill-primary-icon-selected-color`}
                  >
                    {column.logo}
                  </div>
                )}
                <span>{column.columnName}</span>
              </div>
              {column.alias === selectedTab && (
                <motion.div
                  layoutId={`${layoutId}_underline`}
                  className="absolute inset-0 bg-primary-background-color border border-primary-border-color rounded-full"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
