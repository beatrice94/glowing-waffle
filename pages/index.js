import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(`Show me all the posts`)
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Self intro]</p>
        <p>
          (This is a sample website from following the <a href='https://nextjs.org/learn'>Next.js tutorial</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((post) => (
            <li className={utilStyles.listItem} key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={post.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

