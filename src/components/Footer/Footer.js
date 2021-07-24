import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <p className={classes.copyright}>
      &copy; A project written with ReactJS and Redux by
      <a
        className={classes.twitterLink}
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/nhii.16"
      >
        Thanh Nhi.
      </a>
    </p>
  );
};

export default Footer;
