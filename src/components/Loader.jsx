// @modules
import React from "react";
import { Spinner } from "react-bootstrap";

// @styles
import "./Loader.css";

const Loader = () => {
  return (
    <Spinner
      className="Loader__Spinner"
      animation="border"
      role="status"
      variant="dark"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loader;
