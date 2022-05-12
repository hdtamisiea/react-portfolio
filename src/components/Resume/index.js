import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        View my <a href="https://drive.google.com/file/d/1sYdnwjwShFO5gPOAX3lKhi1UPKK0pb0R/view?usp=sharing">resume</a> here.
        </p>
        <br></br>
        <h3>Front-end Technologies</h3>
        <ul className="techsUsed">
          <li>HTML</li>
          <li>Git</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
          <li>jQuery</li>
          <li>Moment.js</li>
          <li>Handlebars</li>
          <li>Responsive Design</li>
          <li>React</li>
          <br></br>
        </ul>
        <h3>Back-end Technologies</h3>
        <ul className="techsUsed">
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Heroku</li>
          <li>Authentication</li>
          <li>CRUD Operations</li>
          <li>Regular Expressions</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>IndexedDB</li>
          <li>NoSQL</li>
          <li>Service Workers</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>Apollo</li>
          <br></br>
        </ul>
        <h3>Other Technologies</h3>
        <ul className="techsUsed">
            <li>Progressive Web Applications</li>

        </ul>
      </div>
    </section>
  );
}

export default Resume;