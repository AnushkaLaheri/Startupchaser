export const openCart = () => {
  document
    .getElementById("uc-cart-panel")
    .classList.add("uc-offcanvas-overlay");
  document.getElementById("uc-cart-panel").classList.add("uc-open");
};
export const closeCart = () => {
  document
    .getElementById("uc-cart-panel")
    .classList.remove("uc-offcanvas-overlay");
  document.getElementById("uc-cart-panel").classList.remove("uc-open");
};
