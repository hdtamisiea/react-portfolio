import React from "react";
import picOfMe from "../../assets/Heather.jpg";

function About() {
  return (
    <div class="hero page-section" id="about">
      <section>
        <img src={picOfMe} alt="Heather Tamisiea" height={200} width={175} />
      </section>

      <section>
        <h2>
          My name is, Heather and I am an aspiring code developer. I have spent
          the last 23 years in the healthcare industry in an administrative
          capacity. For many reasons, I have decided to leave my facility based
          position and find something completely new. I am very excited to learn
          new skills and meet interesting people. My goal is to have a secure,
          flexible career that will also provide opportunities to grow and
          excel.
        </h2>

      </section>
    </div>
  );
}

export default About;
