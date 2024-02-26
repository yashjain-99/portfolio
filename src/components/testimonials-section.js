import { TestimonialsLogo } from "../utils/logos";
import Card from "./card";
import { useSectionInView } from "../hooks/use-section-in-view";
import clsx from "clsx";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";
import { testimonials } from "../utils/constants";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const { ref } = useSectionInView("testimonials", 0.6);
  const { activeSection } = useActiveSectionContext();

  return (
    <motion.div
      className="flex flex-col justify-center items-center mb-4 gap-4 scroll-mt-20"
      id="testimonials"
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        name="TestimonialsSectionTitle"
        className=" h-fit flex flex-col items-center gap-4"
      >
        <div
          className={clsx("stroke-logo-stroke", {
            " stroke-logo-stroke-active": activeSection === "testimonials",
          })}
        >
          {TestimonialsLogo}
        </div>
        <span>Testimonials Section</span>
      </div>
      <div className="flex flex-row max-w-[1024px] gap-4 flex-wrap justify-center h-">
        {testimonials.map((testimonial, index) => {
          return (
            <Card
              appliedClassName="w-96 h-60 p-4 flex flex-row gap-4"
              key={`${testimonial.companyName}`}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="m-1 flex flex-col items-center">
                  <img
                    src={testimonial.logo}
                    className=" aspect-square rounded-full w-16 h-16"
                  />
                  <b>{testimonial.companyName}</b>
                </div>
                <h3 className=" font-cashrole underline text-lg">
                  {testimonial.testimonialBy}
                </h3>
              </div>
              <div className="h-full flex items-center">
                <p className="">{testimonial.testimonial}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
