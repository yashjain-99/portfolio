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
      viewport={{ once: true, amount: 0.2 }}
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
      <div className=" h-fit p-4 leading-7 text-justify">
        <p>
          Minim non in duis sunt aliquip sint pariatur dolore est. Duis quis
          occaecat ullamco proident amet proident magna sit culpa ea occaecat.
          Sunt Lorem est id nulla duis sit dolore nisi ullamco eiusmod ad aute.
          Elit Lorem veniam culpa ut et labore aliqua pariatur non. Qui deserunt
          excepteur ullamco ad culpa non tempor adipisicing pariatur
          exercitation dolor nulla. Ut exercitation veniam laboris dolore ad
          officia eu irure enim velit occaecat Lorem veniam nostrud. Veniam nisi
          et eiusmod sit Lorem aute veniam cillum.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
