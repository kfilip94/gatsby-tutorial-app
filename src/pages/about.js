import React from "react";
import { Link } from 'gatsby';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>My name is Kamil and I'm an awesome dev!</p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </div>
  )
};

export default AboutPage;
