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

function bindLoopTracks() {
  const tracks = document.querySelectorAll("[data-loop-track]");

  tracks.forEach((track) => {
    if (!track.id) {
      return;
    }

    const prev = document.querySelector(`[data-loop-prev][data-loop-target="${track.id}"]`);
    const next = document.querySelector(`[data-loop-next][data-loop-target="${track.id}"]`);
    const progress = document.querySelector(`[data-loop-progress="${track.id}"]`);
    const firstCard = track.querySelector(":scope > *");

    if (!firstCard) {
      return;
    }

    const step = () => firstCard.getBoundingClientRect().width + 16;
    const updateProgress = () => {
      if (!progress) {
        return;
      }

      const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);

      if (maxScroll === 0) {
        progress.style.left = "0%";
        progress.style.width = "100%";
        return;
      }

      const visibleRatio = Math.min(track.clientWidth / track.scrollWidth, 1);
      const widthRatio = Math.max(visibleRatio, 0.18);
      const maxOffset = 1 - widthRatio;
      const scrollRatio = Math.min(track.scrollLeft / maxScroll, 1);

      progress.style.width = `${widthRatio * 100}%`;
      progress.style.left = `${scrollRatio * maxOffset * 100}%`;
    };

    if (next) {
      next.addEventListener("click", () => {
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;

        if (atEnd) {
          track.scrollTo({ left: 0, behavior: "smooth" });
          return;
        }

        track.scrollBy({ left: step(), behavior: "smooth" });
      });
    }

    if (prev) {
      prev.addEventListener("click", () => {
        const atStart = track.scrollLeft <= 8;

        if (atStart) {
          track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
          return;
        }

        track.scrollBy({ left: -step(), behavior: "smooth" });
      });
    }

    track.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
  });
}

function bindServiceSubnav() {
  const nav = document.querySelector("[data-service-subnav]");

  if (!nav) {
    return;
  }

  const track = nav.querySelector("[data-service-subnav-track]");
  const progress = nav.querySelector("[data-service-subnav-progress]");
  const prev = nav.querySelector("[data-service-subnav-prev]");
  const next = nav.querySelector("[data-service-subnav-next]");

  if (!track) {
    return;
  }

  const links = Array.from(track.querySelectorAll('a[href^="#"]'));

  if (links.length === 0) {
    return;
  }

  const sections = links
    .map((link) => {
      const selector = link.getAttribute("href");

      if (!selector) {
        return null;
      }

      const section = document.querySelector(selector);

      if (!section) {
        return null;
      }

      return { link, section };
    })
    .filter(Boolean);

  const updateControls = () => {
    if (!prev || !next) {
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    const hasOverflow = maxScroll > 8;

    prev.disabled = !hasOverflow || track.scrollLeft <= 8;
    next.disabled = !hasOverflow || track.scrollLeft >= maxScroll - 8;
  };

  const updateProgress = () => {
    if (!progress) {
      return;
    }

    const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 1);
    const widthPercent = Math.min(Math.max((track.clientWidth / track.scrollWidth) * 100, 18), 48);
    const offsetPercent = (track.scrollLeft / maxScroll) * (100 - widthPercent);

    progress.style.width = `${widthPercent}%`;
    progress.style.left = `${offsetPercent}%`;
  };

  const centerLink = (link) => {
    const linkCenter = link.offsetLeft + (link.offsetWidth / 2);
    const targetLeft = Math.max(linkCenter - (track.clientWidth / 2), 0);
    const maxScroll = track.scrollWidth - track.clientWidth;

    track.scrollTo({
      left: Math.min(targetLeft, maxScroll),
      behavior: "smooth",
    });
  };

  const setActiveLink = (activeLink, options = {}) => {
    if (!activeLink) {
      return;
    }

    links.forEach((link) => {
      const isActive = link === activeLink;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (options.center !== false) {
      centerLink(activeLink);
    }
  };

  const step = () => Math.max(track.clientWidth * 0.72, 240);

  if (prev) {
    prev.addEventListener("click", () => {
      track.scrollBy({ left: -step(), behavior: "smooth" });
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      track.scrollBy({ left: step(), behavior: "smooth" });
    });
  }

  track.addEventListener("scroll", () => {
    updateControls();
    updateProgress();
  });

  window.addEventListener("resize", () => {
    updateControls();
    updateProgress();

    const activeLink = track.querySelector(".is-active");

    if (activeLink) {
      centerLink(activeLink);
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      setActiveLink(link);
    });
  });

  if (sections.length > 0 && "IntersectionObserver" in window) {
    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const activeSectionId = Array.from(visibleSections.entries())
          .sort((a, b) => b[1] - a[1])[0]?.[0];

        const activePair = sections.find(({ section }) => section.id === activeSectionId);

        if (activePair) {
          setActiveLink(activePair.link);
        }
      },
      {
        rootMargin: "-28% 0px -56% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach(({ section }) => observer.observe(section));
  }

  const initialLink = links.find((link) => link.getAttribute("href") === window.location.hash) || links[0];

  setActiveLink(initialLink, { center: false });
  updateControls();
  updateProgress();
}

function bindUnsupportedActions() {
  document.querySelectorAll("[data-unsupported-action]").forEach((link) => {
    link.addEventListener("click", () => {
      const message = link.dataset.unsupportedMessage;

      if (message) {
        window.alert(message);
      }
    });
  });
}

function bindFloatingSiteNote() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const visiblePages = new Set(["index.html", "orlando.html", "ingles-particular.html"]);

  if (!visiblePages.has(current)) {
    return;
  }

  if (!document.body) {
    return;
  }

  const note = document.createElement("aside");
  note.className = "floating-site-note";
  note.setAttribute("aria-label", "Aviso temporal del sitio");

  if (document.querySelector(".floating-whatsapp")) {
    note.classList.add("floating-site-note--raised");
  }

  note.innerHTML = `
    <button class="floating-site-note__close" type="button" aria-label="Cerrar aviso temporal" data-site-note-close>
      <span aria-hidden="true">×</span>
    </button>
    <div class="floating-site-note__media" aria-hidden="true">
      <span class="floating-site-note__badge">Sitio en remodelación</span>
      <svg viewBox="0 0 320 172" role="presentation" focusable="false">
        <defs>
          <linearGradient id="site-note-browser" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"></stop>
            <stop offset="100%" stop-color="#e8f0ff"></stop>
          </linearGradient>
          <linearGradient id="site-note-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2a78dc"></stop>
            <stop offset="100%" stop-color="#163d78"></stop>
          </linearGradient>
          <linearGradient id="site-note-cone" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffaf5b"></stop>
            <stop offset="100%" stop-color="#ef6d1f"></stop>
          </linearGradient>
        </defs>
        <ellipse cx="168" cy="150" rx="118" ry="16" fill="rgba(22,61,120,0.08)"></ellipse>
        <rect x="30" y="20" width="182" height="112" rx="20" fill="url(#site-note-browser)" stroke="#163d78" stroke-width="4"></rect>
        <path d="M30 45h182" stroke="#163d78" stroke-width="4" stroke-linecap="round"></path>
        <circle cx="48" cy="32.5" r="4.5" fill="#2a78dc"></circle>
        <circle cx="63" cy="32.5" r="4.5" fill="#ff8d4d"></circle>
        <circle cx="78" cy="32.5" r="4.5" fill="#8db3f0"></circle>
        <rect x="52" y="62" width="58" height="14" rx="7" fill="url(#site-note-accent)" opacity="0.92"></rect>
        <rect x="52" y="87" width="138" height="10" rx="5" fill="#c6d7f4"></rect>
        <rect x="52" y="104" width="92" height="10" rx="5" fill="#dce7f9"></rect>
        <rect x="153" y="62" width="37" height="37" rx="12" fill="#eef4ff" stroke="#9fb8e7" stroke-width="3"></rect>
        <path d="M165 82h13m-6.5-6.5V89" stroke="#2a78dc" stroke-width="4" stroke-linecap="round"></path>
        <path d="M226 38v82M252 28v96M278 48v72" stroke="#4c6c9d" stroke-width="4" stroke-linecap="round" opacity="0.82"></path>
        <path d="M216 58h74M216 88h74M216 118h74" stroke="#4c6c9d" stroke-width="4" stroke-linecap="round" opacity="0.82"></path>
        <path d="M234 132h52l-26-66-26 66Z" fill="url(#site-note-cone)" stroke="#c65b1a" stroke-width="4" stroke-linejoin="round"></path>
        <path d="M242 104h36M238 117h44" stroke="#fff1dc" stroke-width="6" stroke-linecap="round"></path>
        <path d="M95 146c12-19 24-33 36-42 6-5 12-8 20-9" fill="none" stroke="#b82a3d" stroke-width="6" stroke-linecap="round"></path>
        <circle cx="159" cy="95" r="7" fill="#b82a3d"></circle>
      </svg>
    </div>
    <div class="floating-site-note__content">
      <span class="floating-site-note__kicker">Aviso temporal</span>
      <strong>Gracias por visitar mi página web.</strong>
      <p>Sigo trabajando en ella y todavía no está terminada, pero ya está operativa y con información suficiente para que puedas revisar mis clases con claridad.</p>
    </div>
  `;

  const dismissButton = note.querySelector("[data-site-note-close]");

  if (!dismissButton) {
    return;
  }

  const dismissNote = () => {
    note.classList.add("is-hidden");
    document.body.classList.remove("has-floating-site-note");

    window.setTimeout(() => {
      note.remove();
    }, 220);
  };

  dismissButton.addEventListener("click", dismissNote);
  document.body.append(note);

  window.requestAnimationFrame(() => {
    document.body.classList.add("has-floating-site-note");
    note.classList.add("is-visible");
  });
}

function initialize() {
  bindNavigation();
  markActiveLinks();
  setFooterYear();
  bindCourseLightbox();
  bindLoopTracks();
  bindServiceSubnav();
  bindUnsupportedActions();
  bindFloatingSiteNote();
}

document.addEventListener("DOMContentLoaded", initialize);
