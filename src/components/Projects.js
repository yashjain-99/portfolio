import { PortfolioSectonLogo } from "./Assets";
import CardLayoutWindow from "./CardLayoutWindow";
import chatSurakshaSS from "../public/chat-suraksha-ss.png";
import kangarooTypeSS from "../public/kangaroo-type-ss.png";
import { useSectionInView } from "../hooks/useSectionInView";
import clsx from "clsx";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";

const Projects = () => {
  const projects = {
    web: [
      {
        heading: "Chat Suraksha",
        description:
          "Chat-Suraksha is an project aimed at providing a secure and user friendly chat application built using the MERN stack, Socket.IO and JWT (JSON Web Tokens) for user authentication. This chat application aims to create a safe and enjoyable environment for users to communicate with friends and family in real-time.",
        tags: ["ReactJS", "NodeJS", "socket.io", "JWT", "mongoDB", "scss"],
        github: "https://github.com/yashjain-99/ChatSuraksha",
        web: "http://chatsuraksha.vercel.app/",
        ss: chatSurakshaSS,
      },
      {
        heading: "KangarooType",
        description:
          "Kangaroo-Type is a web application that provides users a platform to test their typing speed and accuracy. It offers an engaging typing experience and generates comprehensive reports showcasing words per minute (WPM), the number of errors, and other valuable typing statistics along with an interactive graph.",
        tags: ["ReactJS"],
        github: "https://github.com/yashjain-99/KangarooType",
        web: "https://kangaroo-type.vercel.app/",
        ss: kangarooTypeSS,
      },
    ],
    cv: [
      {
        heading: "Car parts detection",
        description:
          "This project leverages YOLOv7 for car parts detection and segmentation, and TorchServe for serving the model as a production-ready API. The goal of this project is to provide accurate and efficient car parts segmentation in images or video frames, making it suitable for various automotive applications.",
        tags: ["Python", "PyTorch", "YOLOv7", "OpenCV"],
        github: "https://github.com/yashjain-99/car_parts_detection",
      },
      {
        heading: "Object tracking",
        description:
          "This is a project that utilizes YOLOv7 for object detection and DeepSORT for object tracking. The project aims to automate the process of tracking objects in videos or images, providing accurate and efficient tracking results.",
        tags: ["Python", "PyTorch", "YOLOv7", "DeepSORT", "OpenCV"],
        github: "https://github.com/yashjain-99/object_tracking",
      },
    ],
    nlp: [
      {
        heading: "Financial News Sentiment Ananlysis using BERT",
        description:
          "Applied NLP with transformers using tensorflow with help of BERT(pretrained Neural Network) to predict sentiment of financial statements.",
        tags: ["NLP", "Python", "BERT", "Transfer Learning"],
        github:
          "https://github.com/yashjain-99/Projects/blob/main/TensorFlow_Proj/Financial_Statement_Analysis_Using_BERT.ipynb",
      },
    ],
  };
  const columns = [
    {
      columnName: "Web",
      alias: "web",
    },
    {
      columnName: "Computer Vision",
      alias: "cv",
    },
    {
      columnName: "Natural Language Processing",
      alias: "nlp",
    },
  ];

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
        columns={columns}
        data={projects}
        layoutId="projects"
        sectionClassName="flex flex-col sm:flex-row gap-4 flex-wrap justify-center w-full"
        cardItemClassName="sm:w-[45%] min-h-[24rem]"
      />
    </div>
  );
};

export default Projects;
