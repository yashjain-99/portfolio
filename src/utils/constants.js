import * as logo from "./logos";
import skilzenLogo from "../public/skilzen_logo.jpg";
import rocketMlLogo from "../public/rocketml_logo.jpg";
import carScanLogo from "../public/carscan_logo.jpg";
import chatSurakshaSS from "../public/chat-suraksha-ss.png";
import kangarooTypeSS from "../public/kangaroo-type-ss.png";

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

export const projects_columns = [
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
