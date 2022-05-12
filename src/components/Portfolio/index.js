import React from "react";
import Project from "../Project";

function Portfolio(props) {
  const projectArray = [
    {
      link: "https://pet-fetcher.herokuapp.com/",
      title: "Pet Fetcher",
      tech: "JavaScript/Handlebars/CSS",
      class: "work-text surf",
    },
    {
      link: "https://hdtamisiea.github.io/goRecette/",
      title: "goRecette: Recipes on the go!",
      tech: "HTML/Materialize CSS/JavaScript",
      class: "work-text led",
    },
    {
      link: "https://hdtamisiea.github.io/weather-dashboard/",
      title: "Weather Dashboard",
      tech: "HTML/CSS/Bootstrap/JavaScript",
      class: "work-text refactor",
    },
    {
      link: "https://safe-badlands-18766.herokuapp.com/",
      title: "Budget Tracker PWA",
      tech: "HTML/Express.js/Mongoose/JavaScript/CSS/Heroku",
      class: "work-text robot",
    },
    {
      link: "https://hdtamisiea.github.io/work-day-scheduler/",
      title: "Work Day Scheduler",
      tech: "HTML/CSS/Bootstrap/Moment.js/JQuery/Javascript",
      class: "work-text run-buddy",
    }
  ];
  return (
    <section class="page-section">
      <div class="work-container">
        {projectArray.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </section>
  );
}

export default Portfolio;
