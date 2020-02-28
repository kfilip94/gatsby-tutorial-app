import React from "react";
import { Link } from 'gatsby';

import Header from "components/header";
import Footer from "components/footer";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>You can reach me on kamil.filip94@gmail.com</p>
      <p>Twitter: <a href="https://twitter.com/kfilip94" target="_blank">@kfilip94</a></p>
      <Footer />
    </div>
  )
};

export default ContactPage;
