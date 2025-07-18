"use client";

const demostrings = ["Bank Account", "Web Payment", " Android & ISO"];
import { TypeAnimation } from "react-type-animation";
export default function TyperComponent({ strings = demostrings }) {
  return (
    <TypeAnimation
      sequence={[...strings.flatMap((element) => [element, 2000])]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}
