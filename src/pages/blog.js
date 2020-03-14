import React from "react";
import Layout from "components/layout";
import { graphql, useStaticQuery, Link } from 'gatsby';

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
            fields {
              slug
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
          const { slug } = edge && edge.node && edge.node.fields ? edge.node.fields : {};

          return title && date ? (
            <li key={date}>
              <h2>
                <Link to={`/blog/${slug}`}>{title}</Link>
              </h2>
              <p>{date}</p>
            </li>
          ) : null;
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage;
