import Head from 'next/head';
import { Children } from 'react';
import { getPosts } from '../services'

export default function Home( { posts }) {

  //setTimeout(() => {posts.map(post => console.log(post.node))}, 5000);

  setTimeout(() => {console.log(posts.map(post => post.node.createdAt))}, 4000);
 
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TypeSeek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 ">
      {posts.map((post, index) => (
            <div key={index}>
              <p>{post.node.description}</p>
            </div>
          ))}
      </main>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
