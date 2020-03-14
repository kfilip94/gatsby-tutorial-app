import React from "react";
import Layout from "components/layout";
import { graphql, useStaticQuery, Link } from 'gatsby';
import styles from './blog.module.scss';

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
      <ol className={styles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          const { title, date } = edge && edge.node && edge.node.frontmatter ? edge.node.frontmatter : {};
          const { slug } = edge && edge.node && edge.node.fields ? edge.node.fields : {};

          return title && date ? (
            <li key={date} className={styles.post}>
                <Link to={`/blog/${slug}`}>
                  <h2>{title}</h2>
                  <p>{date}</p>
                </Link>
            </li>
          ) : null;
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage;
