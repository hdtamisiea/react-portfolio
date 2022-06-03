import React from "react";
import Project from "../Project";

function Portfolio(props) {
  const projectArray = [
    {
      link: "https://book-space-app.herokuapp.com/",
      title: "BookSpace",
      tech: "React/GraphQL/Apollo",
      repo: "https://github.com/hdtamisiea/BookSpace",
      class: "work-text book",
    },
    {
      link: "https://pet-fetcher.herokuapp.com/",
      title: "Pet Fetcher",
      tech: "JavaScript/Handlebars/CSS",
      repo: "https://github.com/hdtamisiea/pet-fetcher",
      class: "work-text surf",
    },
    {
      link: "https://hdtamisiea.github.io/goRecette/",
      title: "goRecette: Recipes on the go!",
      tech: "HTML/Materialize CSS/JavaScript",
      repo: "https://github.com/hdtamisiea/goRecette",
      class: "work-text led",
    },
    {
      link: "https://hdtamisiea.github.io/weather-dashboard/",
      title: "Weather Dashboard",
      tech: "HTML/CSS/ Bootstrap/JavaScript",
      repo: "https://github.com/hdtamisiea/weather-dashboard",
      class: "work-text refactor",
    },
    {
      link: "https://safe-badlands-18766.herokuapp.com/",
      title: "Budget Tracker PWA",
      tech: "HTML/Express.js/Mongoose/ JavaScript/CSS/Heroku",
      repo: "https://github.com/hdtamisiea/budget-tracker",
      class: "work-text robot",
    },
    {
      link: "https://hdtamisiea.github.io/work-day-scheduler/",
      title: "Work Day Scheduler",
      tech: "HTML/CSS/Bootstrap/ Moment.js/JQuery/Javascript",
      repo: "https://github.com/hdtamisiea/work-day-scheduler",
      class: "work-text run-buddy",
    },
    {
      link: "https://hdtamisiea.github.io/password-generator/",
      title: "Password Generator",
      tech: "HTML/CSS/Javascript",
      repo: "https://github.com/hdtamisiea/password-generator",
      class: "work-text password",
    },
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
