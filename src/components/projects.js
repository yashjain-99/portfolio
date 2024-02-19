import { PortfolioSectonLogo } from "../utils/logos";
import CardLayoutWindow from "./CardLayoutWindow";
import { useSectionInView } from "../hooks/use-section-in-view";
import clsx from "clsx";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";
import { projects_columns, projects_data } from "../utils/constants";

const Projects = () => {
  const { ref } = useSectionInView("works", 0.5);
  const { activeSection } = useActiveSectionContext();
  return (
    <div
      className="flex flex-col justify-center items-center p-3 m-3 scroll-mt-12"
      id="works"
      ref={ref}
    >
      <div
        name="PortfolioSectionTitle"
        className=" h-fit flex flex-col items-center gap-4"
      >
        <div
          className={clsx("stroke-logo-stroke", {
            " stroke-logo-stroke-active": activeSection === "works",
          })}
        >
          {PortfolioSectonLogo}
        </div>
        <span>Portfolio Section</span>
      </div>
      <CardLayoutWindow
        columns={projects_columns}
        data={projects_data}
        layoutId="projects"
        sectionClassName="flex flex-col sm:flex-row gap-4 flex-wrap justify-center w-full"
        cardItemClassName="sm:w-[45%] min-h-[24rem]"
      />
    </div>
  );
};

export default Projects;
