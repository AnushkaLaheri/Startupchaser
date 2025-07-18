"use client";
import { products } from "@/data/products";
import { openCart } from "@/utlis/toggleCart";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const pathname = usePathname();
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(products[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  const addProductToCart = (id) => {
    if (!cartProducts.filter((elm) => elm.id == id)[0]) {
      const item = {
        ...products.filter((elm) => elm.id == id)[0],
        quantity: 1,
      };
      setCartProducts((pre) => [...pre, item]);

      openCart();
    }
  };
  const isAddedToCartProducts = (id) => {
    if (cartProducts.filter((elm) => elm.id == id)[0]) {
      return true;
    }
    return false;
  };

  const toggleWishlist = (id) => {
    if (wishList.includes(id)) {
      setWishList((pre) => [...pre.filter((elm) => elm != id)]);
    } else {
      setWishList((pre) => [...pre, id]);
    }
  };
  const isAddedtoWishlist = (id) => {
    if (wishList.includes(id)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList"));
    if (items?.length) {
      setCartProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist"));
    if (items?.length) {
      setWishList(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const [isDark, setisDark] = useState(true);
  const toggleDark = (value) => {
    if (value) {
      document.documentElement.classList.add("uc-dark");
    } else {
      document.documentElement.classList.remove("uc-dark");
    }
  };
  useEffect(() => {
    const getBooleanValue = (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : false; // Default to false if the value is not found
    };
    // for default dark mode
    // const savedValue = getBooleanValue("isDark") ? getBooleanValue("isDark") : true;

    //for default light mode
    const savedValue = getBooleanValue("isDark");

    toggleDark(savedValue);
    setisDark(savedValue);
  }, []);

  const handleToggle = () => {
    const saveBooleanValue = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    };
    const newValue = !isDark;
    setisDark(newValue);
    saveBooleanValue("isDark", newValue);
    toggleDark(newValue);
  };

  const contextElement = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    toggleWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
    isDark,
    handleToggle,
  };

  useEffect(() => {
    if (isDark) {
      document.querySelector(".page-wrapper")?.classList.add("uc-dark");
    } else {
      document.querySelector(".page-wrapper")?.classList.remove("uc-dark");
    }
  }, [pathname, isDark]);
  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
