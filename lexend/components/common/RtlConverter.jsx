"use client";

import { useEffect } from "react";

export default function RtlConverter({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");

    return () => {
      document.documentElement.setAttribute("dir", "ltr");
    };
  }, []);

  return <>{children}</>;
}
