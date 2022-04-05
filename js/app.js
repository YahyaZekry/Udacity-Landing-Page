/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

// Sections=>array.SelectAllSec=, Nav=idNav, ac=.viewport
// const sections = Array.from(document.querySelectorAll("Section"));
const sections = document.querySelectorAll("section");
const nav = document.getElementById("navbar__list");
const activeContainer = document.querySelectorAll(".landing__container");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//Adding Nav bar
function navList() {
  sections.forEach((element) => {
    const sectionName = element.getAttribute("data-nav");
    const sectionId = element.getAttribute("id");
    const list = document.createElement("li");

    list.innerHTML = `<a class="menu__link" data-id="${sectionId}">${sectionName}</a>`;
    nav.appendChild(list);
    // console.log(`check here: ${sectionId}`);
  });
}

// Add class 'active' to section when near top of viewport
function activeScreen() {
  window.onscroll = () => {
    for (i = 0; i < activeContainer.length; i++) {
      const act = Array.from(document.querySelectorAll("section"));
      if (
        (activeContainer[i].getBoundingClientRect().top =
          0 || activeContainer[i].getBoundingClientRect().top <= 300)
      ) {
        for (j = 0; j < activeContainer.length; j++) {
          sections[j].classList.remove("your-active-class");
        }
        sections[i].classList.add("your-active-class");
      }
    }
  };
}

function scrollToView() {
  const lists = document.querySelectorAll(".menu__link");
  // console.log(links);

  lists.forEach((list) => {
    list.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = document.getElementById(list.getAttribute("data-id"));
      // console.log(sectionId);
      sectionId.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
navList();

//Scroll to section
scrollToView();

// Set sections as active
activeScreen();
