import React from "react";
import { Link } from 'gatsby';
import Layout from "components/layout";
import Head from "components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <p>My name is Kamil and I'm an awesome dev!</p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
};

export default AboutPage;
