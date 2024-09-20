import React from "react";
import styles from "./Button.module.css";

const Button = ({ className = "", ...delegated }) => {
  return <button className={`${styles.button} ${className}`} {...delegated} />;
};

export default Button;
