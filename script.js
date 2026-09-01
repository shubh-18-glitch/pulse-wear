const nav = document.getElementById("nav");
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav-links a");
const reserveModal = document.getElementById("reserve-modal");
const reserveDialog = reserveModal.querySelector(".reserve-dialog");
const reserveForm = document.getElementById("reserve-form");
const reserveSuccess = document.getElementById("reserve-success");
let reservationTrigger;

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => {
  setMenu(!nav.classList.contains("open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

function openReservation(trigger) {
  reservationTrigger = trigger;
  reserveForm.hidden = false;
  reserveSuccess.hidden = true;
  reserveModal.hidden = false;
  document.body.classList.add("reserve-open");
  window.setTimeout(() => reserveDialog.focus(), 0);
}

function closeReservation() {
  reserveModal.hidden = true;
  document.body.classList.remove("reserve-open");
  if (reservationTrigger) reservationTrigger.focus();
}

document.querySelectorAll(".buy").forEach((button) => {
  button.addEventListener("click", () => openReservation(button));
});

reserveModal.querySelectorAll("[data-reserve-close]").forEach((button) => {
  button.addEventListener("click", closeReservation);
});

reserveForm.addEventListener("submit", (event) => {
  event.preventDefault();
  reserveForm.hidden = true;
  reserveSuccess.hidden = false;
  reserveSuccess.querySelector(".reserve-done").focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !reserveModal.hidden) closeReservation();
});

const detailTabs = Array.from(document.querySelectorAll(".detail-tab"));
const detailPanels = Array.from(document.querySelectorAll(".detail-panel"));

function selectDetailTab(selectedTab, moveFocus = false) {
  const target = selectedTab.dataset.panel;

  detailTabs.forEach((tab) => {
    const selected = tab === selectedTab;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  detailPanels.forEach((panel) => {
    const selected = panel.id === target;
    panel.classList.toggle("active", selected);
    panel.hidden = !selected;
  });

  if (moveFocus) selectedTab.focus();
}

detailTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectDetailTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % detailTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + detailTabs.length) % detailTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = detailTabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectDetailTab(detailTabs[nextIndex], true);
  });
});

const initialTab = detailTabs.find((tab) => tab.classList.contains("active"));
if (initialTab) selectDetailTab(initialTab);
