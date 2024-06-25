import clsx from "clsx";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";
import { useSectionInView } from "../hooks/use-section-in-view";
import { AboutMeLogo } from "../utils/logos";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { ref } = useSectionInView("about");
  const { activeSection } = useActiveSectionContext();
  return (
    <motion.div
      name="AboutMeSection"
      className="grid grid-flow-row auto-rows-min gap-2 p-3 m-3 md:max-w-[1024px] md:mt-10 scroll-mt-36"
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div
        name="AboutMeTitle"
        className=" h-fit flex flex-col items-center gap-4"
      >
        <div
          className={clsx("stroke-logo-stroke", {
            " stroke-logo-stroke-active": activeSection === "about",
          })}
        >
          {AboutMeLogo}
        </div>
        <span>About Me Section</span>
      </div>
      <div className=" h-fit p-4 leading-7">
        <p>
          Hey there! I'm Yash Jain, a software engineer currently working at RSL
          as a contractor for LinkedIn. With a knack for full stack development,
          I've journeyed through diverse industries, honing my skills along the
          way.
        </p>
        <p>
          My journey started with internships in different fields: from Data
          Engineering at Skilzen, to Data Science at RocketML, and Computer
          Vision at CarScan. These experiences taught me to tackle complex
          problems with clean, efficient code.
        </p>
        <p>
          Let's connect and discuss your next project over a cup of coffee (or
          virtual coffee—I'm flexible)!
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
