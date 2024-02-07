import { BackgroundSectionLogo } from "./Assets";
import CardLayoutWindow from "./CardLayoutWindow";
import { ExtraLogo, CareerLogo, EducationLogo } from "./Assets";

const BackgroundSection = () => {
  const education_career = {
    education: [
      {
        heading: "Bachelors of Computer Applications",
        description: "Birla Institute of Technology, Mesra",
        tags: ["2017-2020"],
      },
      {
        heading: "Masters of Computer Applications",
        description: "Chandigarh University",
        tags: ["2021-2023"],
      },
    ],
    career: [
      {
        heading: "Data engineer, Intern",
        subHeading: "Skilzen",
        description: (
          <ul className="m-2 leading-relaxed text-white/70 text-ellipsis list-disc">
            <li>
              Build systems that collect, manage and convert raw data into
              usable information.
            </li>
            <li>Developed a CLI for scrapping job openings from linkedIn.</li>
          </ul>
        ),
        tags: ["Python", "Selenium", "BeautifulSoup", "AWS E3"],
      },
      {
        heading: "Data scientist, Intern",
        subHeading: "RocketML",
        description: (
          <ul className="m-2 leading-relaxed text-white/70 text-ellipsis list-disc">
            <li>
              Responsible for development of complex machine learning models
              solving real world problems.
            </li>
            <li>
              Developeda CLI for accepting user input data and returning an
              optimal trained model meeting given criteria.
            </li>
            <li>
              Also worked on various other projects such as breast-cancer
              segmentation and other image-classification tasks.
            </li>
          </ul>
        ),
        tags: ["Python", "Tensorflow", "Optuna", "CLI"],
      },
    ],
    extra: [],
  };
  const columns = [
    {
      columnName: "Education",
      alias: "education",
      logo: EducationLogo,
    },
    {
      columnName: "Career",
      alias: "career",
      logo: CareerLogo,
    },
    {
      columnName: "Extra",
      alias: "extra",
      logo: ExtraLogo,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-3 m-3" id="CV">
      <div
        name="PortfolioSectionTitle"
        className=" h-fit flex flex-col items-center gap-4"
      >
        <div>{BackgroundSectionLogo}</div>
        <span>Background Section</span>
      </div>
      <CardLayoutWindow
        columns={columns}
        data={education_career}
        sectionClassName="flex flex-col gap-4 flex-wrap justify-center w-full items-center"
        cardItemClassName="max-w-md"
      />
    </div>
  );
};

export default BackgroundSection;
