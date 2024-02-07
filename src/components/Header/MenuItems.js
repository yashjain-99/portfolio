import * as React from "react";
import { motion } from "framer-motion";
import ConnectButton from "../ConnectButton";
import { useActiveSectionContext } from "../../contexts/ActiveSectionContext";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const menuItems = [
  { item: "home", borderB: "bg-[#FF008C]" },
  { item: "about", borderB: "bg-[#D309E1]" },
  { item: "works", borderB: "bg-[#9C1AFF]" },
  { item: "testimonials", borderB: "bg-[#7700FF]" }, // Corrected spelling
  { item: "CV", borderB: "bg-[#4400FF]" },
];

export const MenuItems = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  return (
    <>
      {menuItems.map((menuItem) => (
        <motion.li
          key={menuItem.item}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mb-5 max-w-max flex items-center cursor-pointer z-10 md:mb-0 relative"
        >
          <a
            href={`#${menuItem.item}`}
            onClick={() => {
              setActiveSection(menuItem.item);
            }}
          >
            {menuItem.item}
          </a>
          {activeSection == menuItem.item && (
            <motion.div
              layoutId="menuItemBorder"
              className={`h-1 w-full absolute ${menuItem.borderB} -bottom-1`}
            ></motion.div>
          )}
        </motion.li>
      ))}
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mb-5 flex items-center cursor-pointer z-10 md:hidden"
      >
        <ConnectButton />
      </motion.li>
    </>
  );
};
