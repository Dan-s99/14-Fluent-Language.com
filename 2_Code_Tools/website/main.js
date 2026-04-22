const data = window.siteData;

const $ = (selector, root = document) => root.querySelector(selector);

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

const setHref = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.href = value;
  }
};

function renderNavigation() {
  setText("brand-domain", data.brand.domain);
  setText("brand-name", data.brand.name);
  setText("brand-tagline", data.brand.tagline);

  const navLinks = document.getElementById("nav-links");
  data.navigation.forEach((item) => {
    const link = createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    navLinks.appendChild(link);
  });

  setText("nav-whatsapp", "WhatsApp");
  setHref("nav-whatsapp", data.contact.whatsappUrl);
}

function renderHero() {
  setText("hero-eyebrow", data.hero.eyebrow);
  setText("hero-title", data.hero.title);
  setText("hero-subtitle", data.hero.subtitle);
  setText("hero-description", data.hero.description);
  setText("hero-floating-note", data.hero.floatingNote);
  setText("hero-whatsapp", "Pedir sesión informativa");
  setHref("hero-whatsapp", data.contact.whatsappUrl);

  const portrait = document.getElementById("hero-portrait");
  portrait.src = data.visuals.heroPortrait;
  portrait.alt = data.visuals.heroPortraitAlt;

  const heroPills = document.getElementById("hero-pills");
  data.hero.pills.forEach((item) => {
    heroPills.appendChild(createElement("span", "pill", item));
  });

  const statsGrid = document.getElementById("hero-stats");
  data.hero.stats.forEach((item) => {
    const card = createElement("article", "stat-card");
    const value = createElement("strong", "", item.value);
    const label = createElement("span", "", item.label);
    card.append(value, label);
    statsGrid.appendChild(card);
  });
}

function renderCourseOverview() {
  setText("course-overview-lead", data.courseOverview.lead);

  const grid = document.getElementById("course-overview");
  data.courseOverview.items.forEach((item) => {
    const card = createElement("article", "overview-card");
    const label = createElement("span", "overview-card__label", item.label);
    const title = createElement("h3", "", item.title);
    const subtitle = createElement("p", "overview-card__subtitle", item.subtitle);
    const summary = createElement("p", "", item.summary);
    const list = createElement("ul");

    item.bullets.forEach((bullet) => {
      list.appendChild(createElement("li", "", bullet));
    });

    const link = createElement("a", "button button-secondary", "Explorar esta ruta");
    link.href = item.anchor;

    card.append(label, title, subtitle, summary, list, link);
    grid.appendChild(card);
  });
}

function renderConversationalCourse() {
  setText("conversational-title", data.conversationalCourse.title);
  setText("conversational-description", data.conversationalCourse.description);

  const modalities = document.getElementById("conversational-modalities");
  data.conversationalCourse.modalities.forEach((item) => {
    const card = createElement("article", "card");
    card.append(
      createElement("span", "card__eyebrow", item.lessons),
      createElement("h3", "", item.title),
      createElement("p", "card__meta", item.duration),
      createElement("p", "", item.summary)
    );

    const list = createElement("ul");
    item.details.forEach((detail) => {
      list.appendChild(createElement("li", "", detail));
    });

    card.appendChild(list);
    modalities.appendChild(card);
  });

  const intensities = document.getElementById("conversational-intensities");
  data.conversationalCourse.intensities.forEach((item) => {
    const card = createElement("article", "card");
    card.append(
      createElement("span", "card__eyebrow", item.title),
      createElement("strong", "card__stat", item.duration),
      createElement("p", "card__meta", item.rhythm),
      createElement("p", "", item.commitment),
      createElement("p", "", item.note)
    );
    intensities.appendChild(card);
  });

  const results = document.getElementById("conversational-results");
  data.conversationalCourse.results.forEach((item) => {
    results.appendChild(createElement("span", "tag", item));
  });
}

function renderProfessionalCourse() {
  setText("professional-title", data.professionalCourse.title);
  setText("professional-description", data.professionalCourse.description);
  setText("professional-recommendation", data.professionalCourse.recommendation);

  const modules = document.getElementById("professional-modules");
  data.professionalCourse.modules.forEach((item) => {
    const card = createElement("article", "card");
    card.append(
      createElement("span", "card__eyebrow", item.lessons),
      createElement("h3", "", item.title),
      createElement("p", "card__meta", item.duration),
      createElement("p", "", item.summary)
    );
    modules.appendChild(card);
  });

  const results = document.getElementById("professional-results");
  data.professionalCourse.results.forEach((item) => {
    results.appendChild(createElement("span", "tag", item));
  });
}

function renderCurricula() {
  setText("curricula-note", data.curricula.note);

  const list = document.getElementById("curricula-list");
  data.curricula.items.forEach((item, index) => {
    const details = createElement("details", "curriculum-panel");
    if (index === 0) {
      details.open = true;
    }

    const summary = createElement("summary");
    const summaryWrap = createElement("div", "curriculum-summary");
    summaryWrap.append(
      createElement("strong", "", item.title),
      createElement("span", "curriculum-meta", item.meta)
    );
    summary.appendChild(summaryWrap);

    const content = createElement("div", "curriculum-content");
    content.appendChild(createElement("p", "", item.note));

    item.groups.forEach((group) => {
      const groupWrap = createElement("div", "curriculum-group");
      const title = createElement("h4", "", group.title);
      const list = createElement("ol");

      group.items.forEach((lesson) => {
        list.appendChild(createElement("li", "", lesson));
      });

      groupWrap.append(title, list);
      content.appendChild(groupWrap);
    });

    details.append(summary, content);
    list.appendChild(details);
  });
}

function renderMethodology() {
  setText("methodology-lead", data.methodology.lead);
  const grid = document.getElementById("methodology-grid");

  data.methodology.pillars.forEach((item) => {
    const card = createElement("article", "card");
    card.append(
      createElement("span", "card__eyebrow", "Pilar"),
      createElement("h3", "", item.title),
      createElement("p", "", item.description)
    );
    grid.appendChild(card);
  });
}

function renderAbout() {
  setText("about-title", data.about.title);

  const paragraphs = document.getElementById("about-paragraphs");
  data.about.paragraphs.forEach((item) => {
    paragraphs.appendChild(createElement("p", "", item));
  });

  const highlights = document.getElementById("about-highlights");
  data.about.highlights.forEach((item) => {
    const card = createElement("article", "highlight-card");
    card.append(
      createElement("strong", "", item.value),
      createElement("span", "", item.label)
    );
    highlights.appendChild(card);
  });

  const aboutImage = document.getElementById("about-image");
  aboutImage.src = data.visuals.aboutImage;
  aboutImage.alt = data.visuals.aboutImageAlt;
}

function renderCredentials() {
  setText("credentials-lead", data.credentials.lead);
  const grid = document.getElementById("credentials-grid");

  data.credentials.items.forEach((item) => {
    const card = createElement("article", "credential-card");
    card.append(
      createElement("span", "card__eyebrow", item.issuer),
      createElement("strong", "", item.title),
      createElement("p", "", item.description)
    );

    const button = createElement("button", "button button-secondary", item.cta);
    button.type = "button";
    button.dataset.credentialPath = item.path;
    button.dataset.credentialTitle = item.title;

    card.appendChild(button);
    grid.appendChild(card);
  });
}

function renderPricing() {
  setText("pricing-lead", data.pricing.lead);
  setText("pricing-whatsapp", "Pedir cotización por WhatsApp");
  setHref("pricing-whatsapp", data.contact.whatsappUrl);

  const cards = document.getElementById("pricing-cards");
  data.pricing.cards.forEach((item) => {
    const card = createElement("article", "card");
    card.append(
      createElement("span", "card__eyebrow", item.title),
      createElement("strong", "card__stat", item.value),
      createElement("p", "", item.description)
    );
    cards.appendChild(card);
  });

  const notes = document.getElementById("pricing-notes");
  data.pricing.notes.forEach((item) => {
    notes.appendChild(createElement("span", "tag", item));
  });
}

function renderFaq() {
  const list = document.getElementById("faq-list");

  data.faq.forEach((item, index) => {
    const details = createElement("details", "faq-item");
    if (index === 0) {
      details.open = true;
    }

    const summary = createElement("summary");
    summary.appendChild(createElement("span", "faq-summary", item.question));
    const content = createElement("div", "faq-content");
    content.appendChild(createElement("p", "", item.answer));

    details.append(summary, content);
    list.appendChild(details);
  });
}

function renderContact() {
  setText("closing-title", data.closing.title);
  setText("closing-description", data.closing.description);

  ["closing-whatsapp", "sticky-whatsapp"].forEach((id) => {
    setText(id, "WhatsApp");
    setHref(id, data.contact.whatsappUrl);
  });

  const cards = document.getElementById("contact-grid");
  const contactItems = [
    {
      title: "WhatsApp",
      value: data.contact.phoneDisplay,
      meta: "Canal principal para pedir tu sesión informativa",
      href: data.contact.whatsappUrl,
      cta: "Escribir por WhatsApp",
    },
    {
      title: "Teléfono",
      value: data.contact.phoneDisplay,
      meta: data.contact.locationNote,
      href: `tel:+52${data.contact.phoneRaw}`,
      cta: "Llamar",
    },
    {
      title: "Correo",
      value: data.contact.email,
      meta: "También puedes escribir si prefieres una conversación más formal",
      href: `mailto:${data.contact.email}`,
      cta: "Enviar correo",
    },
    {
      title: "Facebook",
      value: data.contact.facebookLabel,
      meta: "Si todavía vienes desde redes, aquí me encuentras con el mismo nombre",
      href: data.contact.facebookUrl,
      cta: "Buscar en Facebook",
    },
  ];

  contactItems.forEach((item) => {
    const card = createElement("article", "contact-card");
    card.append(
      createElement("span", "card__eyebrow", item.title),
      createElement("strong", "", item.value),
      createElement("p", "", item.meta)
    );

    const link = createElement("a", "button button-secondary", item.cta);
    link.href = item.href;
    link.target = "_blank";
    link.rel = "noreferrer";

    card.appendChild(link);
    cards.appendChild(card);
  });
}

function bindNavigation() {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = nav.querySelectorAll("a[href^='#']");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindCredentialModal() {
  const modal = document.getElementById("credential-modal");
  const frame = document.getElementById("credential-frame");
  const title = document.getElementById("credential-modal-title");
  const download = document.getElementById("credential-download");

  const closeModal = () => {
    modal.hidden = true;
    frame.src = "";
    document.body.classList.remove("modal-open");
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-credential-path]");
    if (trigger) {
      title.textContent = trigger.dataset.credentialTitle;
      frame.src = trigger.dataset.credentialPath;
      download.href = trigger.dataset.credentialPath;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      return;
    }

    if (event.target.matches("[data-close-modal]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function initializeMeta() {
  document.title = data.meta.title;
  const description = document.querySelector("meta[name='description']");
  if (description) {
    description.setAttribute("content", data.meta.description);
  }
}

function setFooterYear() {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
}

function initialize() {
  initializeMeta();
  renderNavigation();
  renderHero();
  renderCourseOverview();
  renderConversationalCourse();
  renderProfessionalCourse();
  renderCurricula();
  renderMethodology();
  renderAbout();
  renderCredentials();
  renderPricing();
  renderFaq();
  renderContact();
  bindNavigation();
  bindCredentialModal();
  setFooterYear();
}

document.addEventListener("DOMContentLoaded", initialize);
