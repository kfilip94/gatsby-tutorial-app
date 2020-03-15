import React from "react";
import Layout from "components/layout";
import { graphql, useStaticQuery, Link } from 'gatsby';
import styles from './blog.module.scss';
import Head from "components/head";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={styles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          const { title, slug, publishedDate } = edge && edge.node ? edge.node  : {};

          return title && publishedDate ? (
            <li key={publishedDate} className={styles.post}>
                <Link to={`/blog/${slug}`}>
                  <h2>{title}</h2>
                  <p>{publishedDate}</p>
                </Link>
            </li>
          ) : null;
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage;
