import React from "react";
import "./styles.css";

export const Spinner = () => {
  return (
    <svg className="loader" viewBox="0 0 24 24">
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
    </svg>
  );
};
