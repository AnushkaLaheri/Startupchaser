export const openSearchModal = () => {
  document
    .getElementById("uc-search-modal")
    .classList.add("uc-offcanvas-overlay");
  document.getElementById("uc-search-modal").classList.add("uc-open");
};
export const closeSearchModal = () => {
  document
    .getElementById("uc-search-modal")
    .classList.remove("uc-offcanvas-overlay");
  document.getElementById("uc-search-modal").classList.remove("uc-open");
};
