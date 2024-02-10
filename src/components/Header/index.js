import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useMobileContext } from "../../contexts/MobileViewContext";

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
      <div className=" self-start ml-5 mt-4">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 64 64"
          aria-hidden="true"
          role="img"
        >
          <path
            d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm3.198 33.627v10.881h-6.063V35.627L19.096 17.492h7.146l6.023 12.637l5.769-12.637h6.87l-9.706 18.135z"
            fill="purple"
          ></path>
        </svg>
      </div>
      {isMobileView ? <Hamburger /> : <Navigation />}
    </nav>
  );
};

export default Header;
