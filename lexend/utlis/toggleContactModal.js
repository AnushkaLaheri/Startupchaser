export const openContactModal = () => {
  document
    .getElementById("uc-contact-modal")
    .classList.add("uc-offcanvas-overlay");
  document.getElementById("uc-contact-modal").classList.add("uc-open");
};
export const closeContactModal = () => {
  document
    .getElementById("uc-contact-modal")
    .classList.remove("uc-offcanvas-overlay");
  document.getElementById("uc-contact-modal").classList.remove("uc-open");
};
