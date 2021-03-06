import Head from 'next/head'
import {getPosts} from '../services'
import PostCard from '../components/PostCard'
import { v4 as uuidv4 } from "uuid";

export default function Home({ posts }) {

  console.log(posts);
  return (
    <>
      <Head>
        <title>Blog de Tranquil Fred</title>
        <meta
          name="description"
          content="Blog développement web de Tranquil Fred"
        />
      </Head>
      <main>
        <section>
          {posts.map((post, index) => (
            <PostCard key={uuidv4()} index={index} post={post.node} />
          ))}
        </section>
      </main>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
