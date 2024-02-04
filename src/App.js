import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Experience from "./components/Experience";
import HeaderTitle from "./components/HeaderTitle";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
function App() {
  const [animationActive, setAnimationActive] = useState(false);
  const [isNightMode, setisNightMode] = useState(false);

  const handleModeChange = (headerState) => {
    setisNightMode(headerState);
  };

  const ExperienceData = [
    {
      id: 1,
      src: "Yamaha.jpeg",
      companyName: "Yamaha Motor Solutions",
      role: "Software Development Engineer",
      fromTo: "July 2022 - Oct 2023",
      location: "Faridabad, Haryana",
      lineOne:
        "Played a key role in system design, requirement gathering, database table design and API design.",
      lineTwo:
        "Implemented a comprehensive feature enabling the scheduling of both online and offline Microsoft Teams meetings" +
        "," +
        "seamlessly integrating with Outlook and Teams calendars using Graph API under the LDS project.",
      lineThree:
        "Managed a team of 4 new members and delivered multiple modules under the LDS project.",
      lineFour:
        "Enhanced response time of 5 API and delivered 60+ API under multiple projects.",
    },
    {
      id: 2,
      src: "Scaler_logo.jpg",
      companyName: "Scaler Academy",
      role: "Software Development Engineer Intern",
      fromTo: "Jan 2022 - June 2022",
      location: "Banglore, Karnataka",
      lineOne:
        "Developed 10+ APIs demonstrating CRUD operations and integrated them into the Android app.",
      lineTwo:
        "Developed bottom sheets using BottomSheetDialogFragment and integrated backend for the same using Retrofit" +
        "," +
        "Moshi and Hilt following MVVM principles.",
      lineThree:
        "Integrated cards into the recyclerview using paging 3, flow and Json Driven UI.",
      lineFour:
        "Developed Video Player with streaming support using exoplayer.",
    },
    {
      id: 3,
      src: "dclogo.avif",
      companyName: "Design Code Labs",
      role: "Software Development Engineer Intern",
      fromTo: "May 2021 - June 2021",
      location: "Remote",
      lineOne:
        "Single handily developed user interface of a mental health mobile application built on React Native under Expo managed workflow .",
      lineTwo:
        "The application was built for individuals seeking mental health, listeners and mental health experts. Users could book therepy sessions from a mental health expert as well.",
      lineThree:
        "Enhanced user experience by optimising heavy frontend operations and shifting complex calculations on backend.",
      lineFour:
        "Integrated Firebase Backend with the help of Axios and Redux for central state management.",
    },
  ];

  const projectData = [
    {
      id: 1,
      title: "PLACEMENT DETAILS — WEBSITE TO COLLECT PLACEMENT DATA",
      dates: "May 2022",
      url: "https://github.com/nitinsrt/student-details",
      githubText: "(Github Repo)",
      lineOne:
        "Designed, developed and deployed a website in React.js under the supervision of the Head of Department (CSE).",
      lineTwo:
        "Currently being used by my college to collect placement data of students (more than 1000 users).",
      lineThree:
        "Created features like adding more than one internships, jobs, courses and achievements.",
      lineFour: "TECH USED : React.js — Axios — Redux — JavaScript",
    },
    {
      id: 2,
      title: "WEATHER SERVICES — REAL TIME WEATHER DATA",
      dates: "July 2021",
      url: "https://xception-weather-services.onrender.com/",
      githubText: "(View Project)",
      lineOne:
        "A website to get real time weather status of any city in the world.",
      lineTwo:
        "Designed and developed Homepage, Weather and About sections with features like photos carousel" +
        "," +
        "search bar and temperatures along with weather conditions.",
      lineThree:
        "Implemented an API call at the backend to OpenWeather API using Express.js.",
      lineFour:
        "TECH USED : HTML — Javascript — Bootstrap — Node.js — Express.js",
    },
    {
      id: 3,
      title: "SHAURYOTSAVA — SPORTS FESTIVAL MOBILE APP",
      dates: "March 2021",
      url: "https://github.com/nitinsrt/Shauryotsava",
      githubText: "(Github Repo)",
      lineOne:
        "A mobile app built for sports fesitval of IET Lucknow named shauryotsava. The users could register their college and participating teams as well.",
      lineTwo:
        "Implemented user authentication system - signup/login/logout using google AUTH REST API.",
      lineThree:
        "Developed team registration mechanism for participating colleges synced with real-time database on google firebase.",
      lineFour:
        "TECH USED: React Native — Expo — Firebase — Redux — Javascript — Reactjs.",
    },
  ];

  const educationData = [
    {
      id: 1,
      src: "iet.png",
      companyName: "Institute of Engineering and Technology, Lucknow",
      role: "Bachelor of Technology : Information Technology",
      fromTo: "June 2018 - May 2022",
      location: "Lucknow, Uttar Pradesh",
    },
  ];

  const skillsData = [
    {
      id: 1,
      title: "Programming Languages",
      list: [
        {
          id: 1,
          s: "C",
        },
        {
          id: 2,
          s: "C++",
        },
        {
          id: 3,
          s: "Java",
        },
        {
          id: 4,
          s: "JavaScript",
        },
        {
          id: 5,
          s: "HTML/CSS",
        },
      ],
    },
    {
      id: 2,
      title: "Frontend Technologies",
      list: [
        {
          id: 1,
          s: "React.js",
        },
        {
          id: 2,
          s: "Angular",
        },
        {
          id: 3,
          s: "React Native",
        },
        {
          id: 4,
          s: "Android",
        },
      ],
    },
    {
      id: 3,
      title: "Backend Technologies",
      list: [
        {
          id: 1,
          s: "Node.js",
        },
        {
          id: 2,
          s: "Express.js",
        },
        {
          id: 3,
          s: "Spring Boot",
        },
      ],
    },
    {
      id: 4,
      title: "Database Technologies",
      list: [
        {
          id: 1,
          s: "Mongo DB",
        },
        {
          id: 2,
          s: "Postgresql",
        },
      ],
    },
  ];

  useEffect(() => {
    // Trigger the animation after a delay (adjust as needed)
    const animationTimeout = setTimeout(() => {
      setAnimationActive(true);
    }, 500);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={`App ${isNightMode ? "night-mode" : "day-mode"}`}>
      <div>
        <div
          className={`drop-in-container ${animationActive ? "animate" : ""}`}
        >
          <Header toggleState={handleModeChange} />
        </div>
        <div
          className={`content-container ${animationActive ? "animate" : ""}`}
        >
          <Element name="home">
            <section>
              <div className="push-text img">
                <div className="imageContainer">
                  <img src="my photu.jpeg" className="image" />
                </div>
                <div className="textContainer">
                  <p className="introText">
                    My name is Nitin Srivastava. I have 1.5 years of experience
                    working as a full-stack developer at Yamaha Motor Solutions
                    India. My diverse skill set allows me to blend into any role
                    and learn new technologies quickly.
                  </p>
                </div>
              </div>
            </section>
          </Element>
          <Element name="experience">
            <section>
              <div className="workExperience">
                <div
                  className={`expTitleContainer ${
                    animationActive ? "animate" : ""
                  }`}
                >
                  <HeaderTitle title={"Experience"} />
                </div>
                {ExperienceData.map((item) => {
                  return (
                    <Experience
                      key={item.id}
                      src={item.src}
                      companyName={item.companyName}
                      role={item.role}
                      fromTo={item.fromTo}
                      location={item.location}
                      lineOne={item.lineOne}
                      lineTwo={item.lineTwo}
                      lineThree={item.lineThree}
                      lineFour={item.lineFour}
                      isNightMode={isNightMode ? true : false}
                    />
                  );
                })}
              </div>
            </section>
          </Element>
          <Element name="projects">
            <section>
              <div className="workExperience">
                <div
                  className={`expTitleContainer ${
                    animationActive ? "animate" : ""
                  }`}
                >
                  <HeaderTitle title={"Projects"} />
                </div>
                {projectData.map((items) => {
                  return (
                    <Projects
                      key={items.id}
                      title={items.title}
                      dates={items.dates}
                      url={items.url}
                      githubText={items.githubText}
                      lineOne={items.lineOne}
                      lineTwo={items.lineTwo}
                      lineThree={items.lineThree}
                      lineFour={items.lineFour}
                      isNightMode={isNightMode ? true : false}
                    />
                  );
                })}
              </div>
            </section>
          </Element>
          <Element name="education">
            <section>
              <div className="workExperience">
                <div
                  className={`expTitleContainer ${
                    animationActive ? "animate" : ""
                  }`}
                >
                  <HeaderTitle title={"Education"} />
                </div>
                {educationData.map((items) => {
                  return (
                    <Education
                      key={items.id}
                      src={items.src}
                      companyName={items.companyName}
                      role={items.role}
                      fromTo={items.fromTo}
                      location={items.location}
                      isNightMode={isNightMode ? true : false}
                    />
                  );
                })}
              </div>
            </section>
          </Element>
          <Element name="skills">
            <section>
              <div className="workExperience">
                <div
                  className={`expTitleContainer ${
                    animationActive ? "animate" : ""
                  }`}
                >
                  <HeaderTitle title={"Skills"} />
                  <div className="skillsContainer">
                    {skillsData.map((items) => {
                      return (
                        <Skills
                          key={items.id}
                          title={items.title}
                          list={items.list}
                          isNightMode={isNightMode ? true : false}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </Element>
          <Element name="hobbies">
            <section>
              <div className="workExperience">
              <div
                  className={`expTitleContainer ${
                    animationActive ? "animate" : ""
                  }`}
                >
                  <HeaderTitle title={"Hobbies"} />
                  </div>
                  <div className="hobbie">
                  <Hobbies/>
                  </div>
              </div>
            </section>
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
