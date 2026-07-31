/* =========================================================
   VARSHA A PORTFOLIO
   JAVASCRIPT INTERACTIONS
========================================================= */


/* =========================================================
   TYPING ANIMATION
========================================================= */

const typingText = document.getElementById("typingText");

const roles = [
  "Junior Data Scientist",
  "Python Developer",
  "Machine Learning Engineer",
  "Data Analyst",
  "Web Scraping and Automation expert",
  "SQL & Power BI expert"
];

let roleIndex = 0;
let characterIndex = 0;

let isDeleting = false;

function typeRole() {

  const currentRole = roles[roleIndex];

  if (!isDeleting) {

    typingText.textContent =
      currentRole.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentRole.length) {

      isDeleting = true;

      setTimeout(typeRole, 1500);

      return;
    }

  } else {

    typingText.textContent =
      currentRole.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {

      isDeleting = false;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }

    }

  }

  const speed = isDeleting ? 45 : 85;

  setTimeout(typeRole, speed);
}

typeRole();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
  document.getElementById("menuToggle");

const navMenu =
  document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking */

const navLinks =
  document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

  });

});


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
  document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (event) => {

  cursorGlow.style.left =
    `${event.clientX}px`;

  cursorGlow.style.top =
    `${event.clientY}px`;

});


/* =========================================================
   HERO 3D TILT
========================================================= */

const tiltElement =
  document.querySelector("[data-tilt]");


if (tiltElement) {

  tiltElement.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        tiltElement.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        ((y - centerY) / centerY) * -4;

      const rotateY =
        ((x - centerX) / centerX) * 4;

      tiltElement.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.01)`;

    }
  );


  tiltElement.addEventListener(
    "mouseleave",
    () => {

      tiltElement.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    }
  );

}


/* =========================================================
   CARD MOUSE EFFECT
========================================================= */

const cards =
  document.querySelectorAll(
    ".project-card, .snapshot-card, .skill-category, .strength-grid article"
  );


cards.forEach((card) => {

  card.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      card.style.setProperty(
        "--mouse-x",
        `${x}px`
      );

      card.style.setProperty(
        "--mouse-y",
        `${y}px`
      );

    }
  );

});


/* =========================================================
   ACTIVE NAV SECTION
========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(".nav a");


const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          navigationLinks.forEach((link) => {

            link.classList.remove("active-link");

          });

          const activeLink =
            document.querySelector(
              `.nav a[href="#${entry.target.id}"]`
            );

          if (activeLink) {

            activeLink.classList.add(
              "active-link"
            );

          }

        }

      });

    },
    {
      threshold: 0.4
    }
  );


sections.forEach((section) => {

  sectionObserver.observe(section);

});


/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
  document.querySelectorAll(".button");


buttons.forEach((button) => {

  button.addEventListener("click", function (event) {

    const ripple =
      document.createElement("span");

    ripple.style.position = "absolute";

    ripple.style.width = "5px";
    ripple.style.height = "5px";

    ripple.style.borderRadius = "50%";

    ripple.style.background =
      "rgba(255,255,255,0.4)";

    ripple.style.left =
      `${event.offsetX}px`;

    ripple.style.top =
      `${event.offsetY}px`;

    ripple.style.pointerEvents = "none";

    this.style.position = "relative";

    this.style.overflow = "hidden";

    this.appendChild(ripple);

    setTimeout(() => {

      ripple.remove();

    }, 500);

  });

});


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});