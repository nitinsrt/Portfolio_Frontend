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
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [animationActive, setAnimationActive] = useState(false);
  const [isNightMode, setisNightMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ExperienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const baseURL = "https://portfoliobackend-ws9z.onrender.com/api";


  const handleModeChange = (headerState) => {
    setisNightMode(headerState);
  };

  useEffect(() => {
    // Trigger the animation after a delay (adjust as neede
    const fetchDataAndAnimate = async () => {
      try {
        setIsLoading(true);

        const [experienceRes, educationRes, projectRes, skillsRes] = await Promise.all([
          axios.get(baseURL + "/experience"),
          axios.get(baseURL + "/education"),
          axios.get(baseURL + "/projects"),
          axios.get(baseURL + "/skills")
        ]);

        // Set state variables with the fetched data
        setExperienceData(experienceRes.data);
        setEducationData(educationRes.data);
        setProjectData(projectRes.data);
        setSkillsData(skillsRes.data);

        // Log or manipulate the data
        console.log(experienceRes.data);

        // Use setTimeout for animation delay
        const animationTimeout = setTimeout(() => {
          setAnimationActive(true);
          setIsLoading(false);
        }, 500);

        // Clear the timeout when the component unmounts or the effect is re-run
        return () => clearTimeout(animationTimeout);
      } catch (error) {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Ooopssss.....",
          text: "Something went wrong!",
          footer: error.message || "An error occurred during data fetching.",
        });
      }
    };

    fetchDataAndAnimate();
  }, []);

  console.log(educationData);
  console.log(ExperienceData);
  console.log(projectData);
  console.log(skillsData);

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
                  <Hobbies />
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
