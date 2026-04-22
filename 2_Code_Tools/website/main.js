function bindNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!toggle || !nav) {
    return;
  }

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

function markActiveLinks() {
  const current = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href");
    const normalized = href === "./" ? "index.html" : href;

    if (normalized === current) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    }
  });
}

function setFooterYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = year;
  });
}

function bindCourseLightbox() {
  const dialog = document.querySelector("[data-lightbox]");
  const triggers = document.querySelectorAll("[data-lightbox-trigger]");

  if (!dialog || triggers.length === 0) {
    return;
  }

  const image = dialog.querySelector("[data-lightbox-image]");
  const caption = dialog.querySelector("[data-lightbox-caption]");
  const closeButton = dialog.querySelector("[data-lightbox-close]");

  if (!image || !caption) {
    return;
  }

  const closeLightbox = () => {
    if (dialog.open) {
      dialog.close();
    }
  };

  if (typeof dialog.showModal !== "function") {
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const src = trigger.dataset.lightboxSrc;

        if (src) {
          window.open(src, "_blank", "noopener");
        }
      });
    });

    return;
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.dataset.lightboxSrc;
      const alt = trigger.dataset.lightboxAlt || "";

      if (!src) {
        return;
      }

      image.src = src;
      image.alt = alt;
      caption.textContent = alt;
      dialog.showModal();
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
  }

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeLightbox();
    }
  });

  dialog.addEventListener("close", () => {
    image.removeAttribute("src");
    image.alt = "";
    caption.textContent = "";
  });
}

function initialize() {
  bindNavigation();
  markActiveLinks();
  setFooterYear();
  bindCourseLightbox();
}

document.addEventListener("DOMContentLoaded", initialize);
