import { Heading } from "@chakra-ui/react";
import React from "react";
import Typed from "typed.js";

const texts = [
  "#abcdef is a faint blue <span style=\"display: inline-block; background-color: #abcdef; width: 16px; height: 16px;\"></span>",
  "Developer • Creator • Student",
  "DYK? Ghost crabs can run at speeds up to 10 mph",
  "I ♡ Web, DevOps, ML, and Distributed Systems",
];

export default function Sign({ showSubstitle = false }: { showSubstitle?: boolean }) {
  const nameEl = React.useRef(null as any);
  const nameTyped = React.useRef(null as any);
  const subtitleEl = React.useRef(null as any);
  const subtitleTyped = React.useRef(null as any);

  React.useEffect(() => {
    if (showSubstitle) {
      subtitleTyped.current = new Typed(subtitleEl.current as string | Element, {
        strings: texts,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        showCursor: false,
      });
    } else {
      nameTyped.current = new Typed(nameEl.current as string | Element, {
        strings: ["Qijia “Joy” Liu"],
        typeSpeed: 50,
        loop: false,
        showCursor: false,
      });
    }

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      if (nameTyped.current) {
        nameTyped.current.destroy();
      }
      if (subtitleTyped.current) {
        subtitleTyped.current.destroy();
      }
    };
  }, []);

  return <div style={{ position: "relative" }}>
    <img src="/assets/sign.png" style={{ width: "100%", height: "100%", display: "block", margin: "0" }} />
    {showSubstitle ?
      <Heading
        style={{
          color: "#F3C446",
          fontSize: "3.75cqw",
          textAlign: "right",
          position: "absolute",
          top: "26cqw",
          left: "2cqw",
          width: "65cqw",
          transform: "translateY(-50%)",
          textTransform: "uppercase",
          lineHeight: "3cqw",
        }} ref={subtitleEl} /> : <Heading
        style={{
          color: "#F3C446",
          fontSize: "6cqw",
          textAlign: "right",
          position: "absolute",
          top: "26cqw",
          left: "2cqw",
          width: "65cqw",
          transform: "translateY(-50%)",
          textTransform: "uppercase",
          lineHeight: "3cqw",
        }} ref={nameEl} />
    }
  </div>;
}