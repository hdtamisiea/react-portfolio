import React from "react";

function Footer() {
  const icons = [
    {
      name: "fab fa-github fa-2x",
      link: "https://github.com/hdtamisiea",
    },
    {
      name: "fab fa-linkedin fa-2x",
      link: "https://www.linkedin.com/in/heather-tamisiea-989468228",
    },
    {
      name: "fab fa-stack-overflow fa-2x",
      link: "https://stackoverflow.com/users/17575310/heather-tamisiea",
    },
  ];

  return (
    <footer>
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
