import React from "react";

function Project(props) {
  return (
    <a href={props.project.link}>
      <div class={props.project.class}>
        <h4>{props.project.title}</h4>
        <div>
          <a href={props.project.repo} class="repo">
            Click here to view GitHub Repo
          </a>
        </div>
      </div>
    </a>
  );
}

export default Project;
