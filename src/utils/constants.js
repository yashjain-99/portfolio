import * as logo from "./logos";
import skilzenLogo from "../public/skilzen_logo.jpg";
import rocketMlLogo from "../public/rocketml_logo.jpg";
import carScanLogo from "../public/carscan_logo.jpg";
import chatSurakshaSS from "../public/chat-suraksha-ss.png";
import kangarooTypeSS from "../public/kangaroo-type-ss.png";
import vittaSetuSS from "../public/vitta-setu-ss.png";
import nextRtcSS from "../public/next-rtc-ss.png";
import appleWatchStudioCloneSS from "../public/apple-watch-studio-clone-ss.png";

export const background_section_columns = [
  {
    columnName: "Education",
    alias: "education",
    logo: logo.EducationLogo,
  },
  {
    columnName: "Career",
    alias: "career",
    logo: logo.CareerLogo,
  },
  {
    columnName: "Extra",
    alias: "extra",
    logo: logo.ExtraLogo,
  },
];

export const background_section_data = {
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
      heading: "Software Engineer, LinkedIn Contractual SE",
      subHeading: "Raja Software Labs",
      description: (
        <ul className="m-2 leading-relaxed text-white/70 text-ellipsis list-disc">
          <li>
            Improved user experience for a widely-used product, leveraging
            JavaScript, React.js, and Ember.js expertise.
          </li>
          <li>
            Enhanced API efficiency and data retrieval precision through
            migration from REST to GraphQL.
          </li>
          <li>
            Developed internal tools using React.js to manage and track user
            activity, increasing operational efficiency by 40%.
          </li>
          <li>
            Created automated tools to streamline and optimize internal
            workflows, which reduced the manual effort.
          </li>
        </ul>
      ),
      tags: ["Javascript", "Java", "EmberJS", "ReactJS"],
    },
    {
      heading: "Computer vision engineer, Intern",
      subHeading: "CarScan",
      description: (
        <ul className="m-2 leading-relaxed text-white/70 text-ellipsis list-disc">
          <li>
            Developed various production-ready complex computer vision models
            such as real-time instance segmentation of car parts and many more.
          </li>
          <li>
            Worked with various computer vision frameworks and libraries such as
            Detectron2, YOLOv7, and many more for development of models.
          </li>
          <li>Worked with TorchServe and AWS for deploying trained models.</li>
        </ul>
      ),
      tags: ["Python", "PyTorch", "Computer-Vision", "Torch-Serve"],
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
    {
      heading: "Data engineer, Intern",
      subHeading: "Skilzen",
      description: (
        <ul className="m-2 leading-relaxed text-white/70 text-ellipsis list-disc">
          <li>
            Build systems that collect, manage and convert raw data into usable
            information.
          </li>
          <li>Developed a CLI for scrapping job openings from linkedIn.</li>
        </ul>
      ),
      tags: ["Python", "Selenium", "BeautifulSoup", "AWS E3"],
    },
  ],
  extra: [
    {
      heading: "Open Source Contribution",
      description: "Hacktoberfest 2021",
    },
    {
      heading: "President, Developer's Club",
      description: "Chandigarh University",
    },
    {
      heading: "Sponsor head, IT society",
      description: "Birla Institute of Technology",
    },
  ],
};

export const testimonials = [
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

export const projects_data = {
  fullStack: [
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
      heading: "Next-RTC",
      description:
        "Next-RTC is a web application that offers users a platform for seamless peer-to-peer connections. Built with NextJS, it uses Socket.IO to establish the initial connection and WebRTC for peer communication.",
      tags: ["NextJS", "WebRTC", "socket.io", "tailwind"],
      github: "https://github.com/yashjain-99/next-rtc",
      web: "https://next-rtc.onrender.com/",
      ss: nextRtcSS,
    },
  ],
  frontEnd: [
    {
      heading: "VittaSetu",
      description:
        "Vitta-Setu is an account aggregator front-end web application that offers users a seamless platform to manage their financial accounts, track transactions, set budgets, and monitor their financial health. With a modern interface and a focus on user experience, Vitta-Setu ensures that users can easily navigate through their banking needs.",
      tags: ["NextJS", "TS", "tailwind"],
      github: "https://github.com/yashjain-99/vitta-setu",
      web: "https://vitta-setu.vercel.app/",
      ss: vittaSetuSS,
    },
    {
      heading: "KangarooType",
      description:
        "Kangaroo-Type is a web application that provides users a platform to test their typing speed and accuracy. It offers an engaging typing experience and generates comprehensive reports showcasing words per minute (WPM), the number of errors, and other valuable typing statistics along with an interactive graph.",
      tags: ["ReactJS", "scss"],
      github: "https://github.com/yashjain-99/KangarooType",
      web: "https://kangaroo-type.vercel.app/",
      ss: kangarooTypeSS,
    },
    {
      heading: "Apple Watch Studio Clone",
      description:
        "Apple Watch Studio Clone is a web application that allows users to customize their Apple Watch. Inspired by the official Apple Watch Studio website, this app enables you to choose your watch case, collection, size, and band while offering a real-time preview of your design and the associated cost.",
      tags: ["NextJS", "ReactJS", "tailwindCSS", "framer motion"],
      github: "https://github.com/yashjain-99/apple-watch-studio-clone/",
      web: "https://apple-watch-studio-clone.vercel.app/",
      ss: appleWatchStudioCloneSS,
    },
  ],
  backEnd: [
    {
      heading: "Potato-API",
      description:
        "Potato-API is a RESTful API that enables users to explore various dishes along with their respective recipes. It also allows administrators to add new dishes and recipes. The API uses token-based authentication and includes functionality for adding images as well.",
      tags: ["Python", "Django", "DRF", "Docker"],
      github: "https://github.com/yashjain-99/Potato-API",
    },
  ],
  ml: [
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

export const projects_columns = [
  {
    columnName: "Fullstack",
    alias: "fullStack",
  },
  {
    columnName: "Frontend",
    alias: "frontEnd",
  },
  {
    columnName: "Backend",
    alias: "backEnd",
  },
  {
    columnName: "ML",
    alias: "ml",
  },
];
