import React from 'react';
import Layout from 'components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark ( fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = props => {
  const { frontmatter, html } = props.data.markdownRemark;
  const { title, date } = frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </Layout>
  )
};

export default Blog;