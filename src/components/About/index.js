import React from "react";
import picOfMe from "../../assets/Heather.jpg";


function About(props) {
  return (
    <div>
      <section class="hero">
        <img
          src={picOfMe}
          alt="Heather Tamisiea"
          height={200}
          width={175}
        />

        <div>
          <h2>"It is never too late to be what you might have been."</h2>
        </div>
      </section>
    </div>
  );
}

export default About;
