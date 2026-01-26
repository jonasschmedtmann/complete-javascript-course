"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const operationsContainer = document.querySelector(".operations");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = operationsContainer.querySelectorAll(
  ".operations__content",
);
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
const allLazyImages = document.querySelectorAll("[data-src]");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const sliderLeft = document.querySelector(".slider__btn.slider__btn--left");
const sliderRight = document.querySelector(".slider__btn.slider__btn--right");
const dotsCon = document.querySelector(".dots");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Page navigation

document.querySelector(".nav__links").addEventListener("click", e => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////
// Tabbed Component

tabsContainer.addEventListener("click", e => {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  tabs.forEach(tab => {
    tab.classList.remove("operations__tab--active");
  });
  tabsContent.forEach(content => {
    content.classList.remove("operations__content--active");
  });

  clicked.classList.add("operations__tab--active");
  operationsContainer
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////////////////////////////////
// Menu fade animation
nav.addEventListener("mouseover", e => {
  if (!e.target.classList.contains("nav__link")) return;
  const link = e.target;
  const others = [
    ...e.currentTarget.querySelectorAll(".nav__link"),
    e.currentTarget.querySelector(".nav__logo"),
  ].filter(el => el !== link);

  others.forEach(el => {
    el.style.opacity = 0.5;
  });
});

nav.addEventListener("mouseout", e => {
  const all = [
    ...e.currentTarget.querySelectorAll(".nav__link"),
    e.currentTarget.querySelector(".nav__logo"),
  ];

  all.forEach(el => {
    el.style.opacity = 1;
  });
});

///////////////////////////////////////
// Sticky Navigation

// By scroll event
// const startStickyLine = document
//   .querySelector("#section--1")
//   .getBoundingClientRect().top;
// window.addEventListener("scroll", () => {
//   if (window.scrollY >= startStickyLine) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// By Intersection Observer API
const stickyNav = entries => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove("sticky");
  } else {
    nav.classList.add("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
// Reveal Sections

const revealSection = entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    sectionObserver.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

///////////////////////////////////////
// Reveal Images
const loadImage = entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-img");
    });
    imagesObserver.unobserve(entry.target);
  });
};
const imagesObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
allLazyImages.forEach(img => {
  imagesObserver.observe(img);
});

///////////////////////////////////////
// Slider

let currentSlide = 0;
const maxSlide = slides.length - 1;

// Change The Slides
function goToSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
  document.querySelectorAll(".dots__dot").forEach(dot => {
    dot.classList.remove("dots__dot--active");
  });
  dotsCon
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
}

function nextSlide() {
  currentSlide === maxSlide ? (currentSlide = 0) : currentSlide++;
  goToSlide(currentSlide);
}
sliderRight.addEventListener("click", nextSlide);

function previousSlide() {
  currentSlide === 0 ? (currentSlide = maxSlide) : currentSlide--;
  goToSlide(currentSlide);
}
sliderLeft.addEventListener("click", previousSlide);

// Dots
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dots__dot");
  dot.dataset.slide = i;
  if (i === 0) dot.classList.add("dots__dot--active");
  dotsCon.append(dot);
});

dotsCon.addEventListener("click", e => {
  if (!e.target.classList.contains("dots__dot")) return;

  currentSlide = e.target.dataset.slide;
  goToSlide(currentSlide);
});

// Move by keyboard
function moveByArrows(e) {
  if (e.key === "ArrowRight") nextSlide();
  else if (e.key === "ArrowLeft") previousSlide();
}
function moveByKeyboard(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    document.removeEventListener("keydown", moveByArrows);
    return;
  }
  document.addEventListener("keydown", moveByArrows);
}
const sliderObserver = new IntersectionObserver(moveByKeyboard, {
  root: null,
  threshold: 1,
});
sliderObserver.observe(slider);

goToSlide(0);
