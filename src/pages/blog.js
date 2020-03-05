import React from "react";
import Layout from "components/layout";
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          const { title, date } = edge && edge.node && edge.node.frontmatter ? edge.node.frontmatter : {};
          return title && date ? (
            <li key={date}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          ) : null;
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage;
