import { useSectionInView } from "../hooks/use-section-in-view";
import {
  GithubLogo,
  InstagramLogo,
  LinkedInLogo,
  TwitterLogo,
} from "../utils/logos";
import Card from "./card";
import ConnectButton from "./connect-button";
import { motion } from "framer-motion";
import portfolioPhoto from "../public/portfolio_photo.jpg";

const Hero = () => {
  const { ref } = useSectionInView("home");
  const skillsArray = [
    { skill: "Full-stack development", bgColor: "bg-[#20a7d8]" },
    { skill: "Natural Language Processing", bgColor: "bg-[#cd921e]" },
    { skill: "Computer Vision", bgColor: "bg-[#c10528]" },
  ];

  return (
    <motion.div
      className="grid grid-rows-2 gap-2 p-3 m-3 md:h-80 md:max-w-[1024px] md:grid-cols-3 md:grid-rows-none md:gap-8 md:mt-10 scroll-mt-20"
      id="home"
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card appliedClassName="flex flex-col p-3 md:col-span-2 md:flex-row md:items-center">
        <div className="min-h-max max-w-max border-white rounded-full m-3 md:m-5 md:min-w-max border">
          <img
            src={portfolioPhoto}
            className="rounded-full aspect-square h-24 w-24 md:h-52 md:w-52"
          />
        </div>
        <div className="m-3 max-w-full flex flex-col gap-2 md:gap-4">
          <div className="text-3xl font-medium md:text-5xl">Yash Jain</div>
          <div className="flex flex-col">
            <p className="hero-intro-p">
              A Software Engineer with keen interests in
            </p>
            <section className="hero-intro-animation">
              {skillsArray.map((value, index) => {
                return (
                  <div key={index} className={`animation-${index}`}>
                    <div
                      className={`box-border border rounded-lg border-white ${value.bgColor}`}
                    >
                      {value.skill}
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </Card>
      <div className="grid grid-rows-3 min-w-full">
        <Card appliedClassName="flex flex-col">
          <span className="m-4 text-sm font-light">Based In</span>
          <span className="ml-4 text-2xl font-sans font-semibold md:self-center">
            Jabba
          </span>
        </Card>
        <div className="flex items-center gap-2 justify-evenly">
          <Card appliedClassName="p-3 cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fill-white group-hover:fill-primary-icon-selected-color transition-all ease-in-out"
            >
              {GithubLogo}
            </motion.div>
          </Card>
          <Card appliedClassName="p-3 cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fill-white group-hover:fill-primary-icon-selected-color transition-all ease-in-out"
            >
              {LinkedInLogo}
            </motion.div>
          </Card>
          <Card appliedClassName="p-3 cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fill-white group-hover:fill-primary-icon-selected-color transition-all ease-in-out"
            >
              {InstagramLogo}
            </motion.div>
          </Card>
          <Card appliedClassName="p-3 cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fill-white group-hover:fill-primary-icon-selected-color transition-all ease-in-out"
            >
              {TwitterLogo}
            </motion.div>
          </Card>
        </div>
        <Card appliedClassName="flex items-center justify-center">
          <ConnectButton />
        </Card>
      </div>
    </motion.div>
  );
};

export default Hero;
