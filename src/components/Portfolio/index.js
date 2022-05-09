import React from "react";
import Project from "../Project";

function Portfolio(props) {
  const projectArray = [
    {
      link: "https://pet-fetcher.herokuapp.com/",
      title: "Pet&#128062;Fetcher",
      tech: "JavaScript/Handlebars/CSS",
      class: "work-text surf",
    },
    {
      link: "https://pet-fetcher.herokuapp.com/",
      title: "Pet&#128062;Fetcher",
      tech: "JavaScript/Handlebars/CSS",
      class: "work-text surf",
    },
    {
      link: "https://pet-fetcher.herokuapp.com/",
      title: "Pet&#128062;Fetcher",
      tech: "JavaScript/Handlebars/CSS",
      class: "work-text surf",
    },
  ];
  return (
    <section class="page-section">
      <h2 id="work">Projects</h2>
      <div class="work-container">
        {projectArray.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </section>
  );
}

export default Portfolio;
