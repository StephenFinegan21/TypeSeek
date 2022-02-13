import Head from 'next/head';
import { Children } from 'react';
import { getPosts } from '../services'
import Post from '../components/Post'
import  Header  from '../components/Header';

export default function Home( { posts }) {

  //setTimeout(() => {posts.map(post => console.log(post.node))}, 5000);

  //setTimeout(() => {console.log(posts.map(post => post.node.createdAt))}, 4000);
 
  
  return (
    <div className="page-container">
      <Header />

      <main className="my-20 w-4/5 mx-auto grid grid-cols-1  md:grid-cols-3 gap-10  ">
      {posts.map((post, index) => (
            <Post   
              key={index}
              data={post.node}
            />
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
