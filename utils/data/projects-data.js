import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Food Delivery Application",
    description:
      "Discover and order favorite dishes effortlessly with my React Native food delivery app. Enjoy a user-friendly interface with easy navigation, restaurant selection, and dish customization. Seamlessly add items to your cart and place orders while exploring restaurant locations via integrated maps. Elevate dining experience with this intuitive app, showcasing streamlined functionality and dynamic user interactions.",
    tools: ["React Native", "Tailwind CSS", "Expo", "Google Maps"],

    code: "https://github.com/jaypatel125/Food-Delivery-App",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Weather Application",
    description:
      "Experience real-time weather updates at your fingertips with my React Native weather app. Seamlessly integrating REST APIs, users can effortlessly add and remove cities to their customized list. Embrace personalized viewing preferences with the toggle feature for dark and light modes.",
    tools: ["React Native", "Expo", "REST API"],

    code: "https://github.com/jaypatel125/Weather-App",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "WellnessWhiz Chatbot",
    description:
      "Developed a Python health chatbot! Designed to be a reliable source of health information on Discord. With OpenAI's support, it's adept at understanding health queries and providing expert responses. Perfect for anyone seeking quick and accurate health advice in chat. This chatbot streamlines health discussions, making them accessible and informative for all.",
    tools: [
      "Python",
      "Discord API",
      "OpenAI Services",
      "Natural Language Processing",
      "Prompt Engineering",
    ],
    code: "https://github.com/jaypatel125/GPT-FAQ-Bot",

    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Coffee Shop Website",
    description:
      "Explore a vibrant coffee culture through WordPress coffee shop website. Discover a diverse menu on the homepage, delve into engaging blog posts, and stay informed about upcoming events with our interactive calendar and map. Connect effortlessly via the Contact page. It's more than just a website; it's gateway to a world of coffee delights.",
    tools: ["WordPress", "Google Maps API"],
    code: "https://github.com/jaypatel125/Coffee-Shop-Website",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
  {
    id: 5,
    name: "HTML File Checker",
    description:
      "Created C# Windows application, engineered for HTML tag balance verification. With a simple upload feature, users can swiftly assess the balance of HTML tags within their files. Offering efficiency and reliability, this tool ensures the structural integrity of HTML documents, facilitating smooth development and content creation workflows.",
    tools: ["C#", "Windows Forms", "File Handling"],
    code: "https://github.com/jaypatel125/HTML-File-Checker",
    demo: "",
    image: crefin,
  },
];
