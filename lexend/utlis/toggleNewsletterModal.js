export const openNewsletterModal = () => {
  document
    .getElementById("uc-newsletter-modal")
    .classList.add("uc-offcanvas-overlay");
  document.getElementById("uc-newsletter-modal").classList.add("uc-open");
};
export const closeNewsletterModal = () => {
  document
    .getElementById("uc-newsletter-modal")
    .classList.remove("uc-offcanvas-overlay");
  document.getElementById("uc-newsletter-modal").classList.remove("uc-open");
};
