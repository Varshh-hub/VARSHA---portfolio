
/* =========================================================
   VARSHA A PORTFOLIO
   JAVASCRIPT INTERACTIONS
========================================================= */


/* =========================================================
   TYPING ANIMATION
========================================================= */

const typingText = document.getElementById("typingText");

const roles = [
  "Aspiring Data Scientist",
  "Aspiring ML Engineer",
  "Aspiring DL Engineer",
  "Aspiring NLP Engineer",
  "Aspiring CV Engineer",
  "Aspiring GenAI Engineer",
  "Aspiring LLM Engineer",
  "Aspiring AI Engineer",
  "Aspiring Python Developer",
  "Aspiring Data Analyst",
  "Web Scraping Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeRole() {
  if (!typingText) return;

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
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = isDeleting ? 45 : 85;
  setTimeout(typeRole, speed);
}

if (typingText) {
  typeRole();
}


/* =========================================================
   SCROLL REVEAL
   REPLAYS EVERY TIME ELEMENTS ENTER THE VIEWPORT
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    // Start hidden, then reveal only when scrolled into view.
    element.classList.remove("active");
    revealObserver.observe(element);
  });
} else {
  // Fallback for older browsers.
  revealElements.forEach((element) => {
    element.classList.add("active");
  });
}



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu after clicking a navigation link.
  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && !prefersReducedMotion) {
  document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}


/* =========================================================
   HERO 3D TILT
========================================================= */

const tiltElement = document.querySelector("[data-tilt]");

if (tiltElement && !prefersReducedMotion) {
  tiltElement.addEventListener("mousemove", (event) => {
    const rect = tiltElement.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    tiltElement.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) ` +
      `rotateY(${rotateY}deg) scale(1.01)`;
  });

  tiltElement.addEventListener("mouseleave", () => {
    tiltElement.style.transform =
      "perspective(1000px) rotateX(0deg) " +
      "rotateY(0deg) scale(1)";
  });
}


/* =========================================================
   CARD MOUSE EFFECT
========================================================= */

const cards = document.querySelectorAll(
  ".project-card, .snapshot-card, .skill-category, .strength-grid article"
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});


/* =========================================================
   ACTIVE NAV SECTION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav a");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navigationLinks.forEach((link) => {
          link.classList.remove("active-link");
        });

        const activeLink = document.querySelector(
          `.nav a[href="#${entry.target.id}"]`
        );

        if (activeLink) {
          activeLink.classList.add("active-link");
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
}


/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  // Ensure the ripple can be positioned inside the button.
  if (getComputedStyle(button).position === "static") {
    button.style.position = "relative";
  }

  button.style.overflow = "hidden";

  button.addEventListener("click", (event) => {
    if (prefersReducedMotion) return;

    const rect = button.getBoundingClientRect();

    const ripple = document.createElement("span");

    const size = Math.max(rect.width, rect.height) * 2;

    ripple.style.position = "absolute";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.35)";
    ripple.style.pointerEvents = "none";
    ripple.style.transform = "translate(-50%, -50%) scale(0)";
    ripple.style.animation = "buttonRipple 500ms ease-out forwards";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 550);
  });
});

// Add the ripple animation only once.
if (!document.getElementById("button-ripple-styles")) {
  const rippleStyles = document.createElement("style");

  rippleStyles.id = "button-ripple-styles";

  rippleStyles.textContent = `
    @keyframes buttonRipple {
      to {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
      }
    }
  `;

  document.head.appendChild(rippleStyles);
}


/* =========================================================
   PAGE LOAD
========================================================= */

function markPageLoaded() {
  document.body.classList.add("loaded");
}

if (document.readyState === "complete") {
  markPageLoaded();
} else {
  window.addEventListener("load", markPageLoaded, { once: true });
}
