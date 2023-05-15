import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../../components/layout";

export async function getStaticProps() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    const favourite = await res.json();
    return {
        props: {
          favourite,
        },
      };
}

export default function FirstPost({ favourite }) {
    return (
      <Layout>
        <Head>
            <title>My First Post</title>
        </Head>
        <h1>First Post</h1>
        <Image src="/images/bestie-please.jpg" width={400} height={300}/>

        <p>My favourite pokemon is {favourite.name} bc he's cute as fuck</p>
        <a href="#">THis is a link to nowhere</a>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    );
  }
  