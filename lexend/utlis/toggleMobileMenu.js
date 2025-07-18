export const openMobileMenu = () => {
  document
    .getElementById("uc-menu-panel")
    .classList.add("uc-offcanvas-overlay");
  document.getElementById("uc-menu-panel").classList.add("uc-open");
};
export const closeMobileMenu = () => {
  document
    .getElementById("uc-menu-panel")
    .classList.remove("uc-offcanvas-overlay");
  document.getElementById("uc-menu-panel").classList.remove("uc-open");
};
