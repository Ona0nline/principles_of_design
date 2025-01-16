import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#f00", "#0f0", "#00f"]
  );

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor,
        zIndex: -1, // Keeps it behind other content
      }}
    />
  );
};

export default Scroll;
