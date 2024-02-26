import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

import MenuToggle from "./menu-toggle";
import Navigation from "./navigation";
import { useDimensions } from "../../hooks/use-dimensions";
import { useMobileContext } from "../../contexts/MobileViewContext";
import { YLogo } from "../../utils/logos";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 38px) 28px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at calc(100vw - 38px) 28px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Hamburger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="nav-hamburger"
    >
      <motion.div
        className="background m-3 border rounded-3xl"
        variants={sidebar}
      />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

const Header = () => {
  const isMobileView = useMobileContext();

  return (
    <nav className=" h-16 w-full flex sticky top-0 md:max-w-[1024px]">
      <div className=" self-start ml-5 mt-4">{YLogo}</div>
      {isMobileView ? <Hamburger /> : <Navigation />}
    </nav>
  );
};

export default Header;
