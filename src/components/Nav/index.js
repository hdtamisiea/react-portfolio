// import React from 'react';

// function Navigation(props) {
//     return (
//         <nav>
//             <a href="#about">About</a>

//             <a href="#work">Projects</a>

//             <a href="#contact">Contact</a>

//             <a href="https://drive.google.com/file/d/1sYdnwjwShFO5gPOAX3lKhi1UPKK0pb0R/view?usp=sharing">Resume</a>

//         </nav>
//     );
// }

// export default Navigation;
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
      <ul className="flex-row">
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
