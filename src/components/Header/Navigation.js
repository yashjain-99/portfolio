import * as React from "react";
import { motion } from "framer-motion";
import { MenuItems } from "./MenuItems";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: "flex",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    display: "none",
  },
};
export const Navigation = () => (
  <motion.ul
    variants={variants}
    className="min-w-full p-6 flex flex-col justify-center md:flex-row md:gap-12 md:items-center "
  >
    <MenuItems />
  </motion.ul>
);
