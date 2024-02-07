import { TestimonialsLogo } from "./Assets";
import Card from "./Card";
import carScanLogo from "../public/carscan_ai.jpeg";
import rocketMlLogo from "../public/rocketml_logo.jpeg";
import skilzenLogo from "../public/skilzen_logo.jpeg";

export default TestimonialsSection = () => {
  const testimonials = [
    {
      companyName: "Skilzen",
      testimonial:
        "Yash Jain was a standout as a Data Engineer intern at Skilzen. His determination and sincerity shone through in every task. He's not just a hard worker; Yash is motivated and innovative, making a significant impact on our goals.",
      testimonialBy: " Talluri Pavanteja",
      lor: "https://drive.google.com/file/d/1BY0NkDheNHErvA1P13YXRmtktJQtNp94/view?usp=sharing",
      logo: skilzenLogo,
    },
    {
      companyName: "RocketML",
      testimonial:
        "Throughout his tenure, Yash demonstrated a strong grasp of professional skills, successfully tackling all assigned tasks. His hardworking and dedicated nature contributed significantly to the team. It was a pleasure to have Yash on board during his time with RocketML.",
      testimonialBy: "Vinay Rao",
      lor: "https://drive.google.com/file/d/1Y0GplQI7jRrMVljeRKWw9bO8wfj_fCYd/view?usp=sharing",
      logo: rocketMlLogo,
    },
    {
      companyName: "CarScan",
      testimonial:
        "Yash worked with our AI Team in India, showcasing professionalism and completing all tasks with dedication. His hardworking and committed approach made him a pleasure to have on board during this short period",
      testimonialBy: "Obins Choudhary",
      lor: "https://drive.google.com/file/d/1Irf_z189bbCOnrVPIjHL1JWinmAe_A_2/view?usp=sharing",
      logo: carScanLogo,
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center mb-4 gap-4"
      id="testimonials"
    >
      <div
        name="TestimonialsSectionTitle"
        className=" h-fit flex flex-col items-center gap-4"
      >
        <div>{TestimonialsLogo}</div>
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
    </div>
  );
};
