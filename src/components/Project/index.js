import React from "react";

function Project(props) {
  return (
    <a href={props.project.link} class={props.project.class}>
      <div>
        <h4>{props.project.title}</h4>
        <span>{props.project.tech}</span>
        <div>
        <a href={props.project.repo} class="repo">Click here to view GitHub Repo</a>
        </div>
      </div>
    </a>
  );
}

export default Project;
