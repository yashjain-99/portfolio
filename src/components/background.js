import { BackgroundSectionLogo } from "../utils/logos";
import CardLayoutWindow from "./CardLayoutWindow";
import { useSectionInView } from "../hooks/use-section-in-view";
import clsx from "clsx";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";
import {
  background_section_data,
  background_section_columns,
} from "../utils/constants";
import { motion } from "framer-motion";

const BackgroundSection = () => {
  const { ref } = useSectionInView("CV");
  const { activeSection } = useActiveSectionContext();

  return (
    <motion.div
      className="flex flex-col justify-center items-center p-3 m-3"
      id="CV"
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        name="PortfolioSectionTitle"
        className=" h-fit flex flex-col items-center gap-4"
      >
        <div
          className={clsx("stroke-logo-stroke", {
            " stroke-logo-stroke-active": activeSection === "CV",
          })}
        >
          {BackgroundSectionLogo}
        </div>
        <span>Background Section</span>
      </div>
      <CardLayoutWindow
        columns={background_section_columns}
        data={background_section_data}
        sectionClassName="flex flex-col gap-4 flex-wrap justify-center w-full items-center m-4"
        cardItemClassName="max-w-md"
      />
    </motion.div>
  );
};

export default BackgroundSection;
