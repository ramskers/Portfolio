export const projects = [
  {
    title: "HoopUp",
    description:
      "Built on React.js and uses Firebase to authenticate users to create an account, create posts, submit messages through a contact form, and locate basketball courts through an autocomplete search bar.  User posts and contact messages are stored in Firestore Database. Challenges included authentication, user parameters, autocomplete search and mobile friendly interface.",
    image: "/images/1.png",
    tags: ["JavaScript", "React", "Firebase"],
    source: "https://github.com/ramskers/hoopup",
    visit: "https://hoopup-85085.web.app/",
    id: 0,
  },
  {
    title: "TravelUp",
    description:
      "Travel advisory application built on React.js framework and uses a travel advisor API, open weather map API, and Google Maps API to locate popular restaurants, hotels, and attractions. Styled with custom and Material UI components. Challenges included API implementation with UI and refreshing new coordinates with data as map was used.",
    image: "/images/2.png",
    tags: ["React", "JavaScript", "API's"],
    source: "https://github.com/ramskers/TravelUp",
    visit: "https://cheery-pothos-c045ce.netlify.app/",
    id: 1,
  },
  {
    title: "Real Estate",
    description:
      "Real estate property application built on Next.js framework and uses RapidAPI to pull and filter property details in the UAE.  Used Chakra UI on the frontend to build styled components. Challenges included implementing a search filter function with available data from RapidAPI.",
    image: "/images/3.png",
    tags: ["Next", "JavaScript", "Node", "API"],
    source: "https://github.com/ramskers/realestate",
    visit: "https://realestate-ramskers.vercel.app/",
    id: 2,
  },
  {
    title: "Weather App",
    description:
      "Weather application built on React and uses OpenWeatherMap API which allows users to pull weather data from any international location. Challenges included implementing my first API.",
    image: "/images/4.png",
    tags: ["React", "JavaScript", "API"],
    source: "https://github.com/ramskers/weather-web",
    visit: "https://ramskers.github.io/weather-web/",
    id: 3,
  },
];

export const TimeLineData = [
  { year: "HoopUp", text: "Started my journey with user authentication" },
  { year: "Weather", text: "Learned how to fetch API's" },
  {
    year: "Realtor",
    text: "Customized data results through filter functionalities",
  },
  {
    year: "TravelUp",
    text: "Implemented Google maps API with features from previous projects",
  },
  { year: "PersonalWeb", text: "Shared my projects with the world" },
  { year: "Netflix Clone", text: "COMING SOON" },
];
