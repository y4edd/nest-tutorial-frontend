import styles from "@/styles/Home.module.css";
import { getAllPosts, getPostsById } from "@/utils/api";
import { PostType } from "@/utils/Types";

type Post = {
  post: PostType
}

// SSG.記事の投稿をビルド時に全部取得する静的生成
export async function getStaticProps({ params }: { params: { id: string } }) {
  const posts:PostType[] = await getPostsById(params.id);

  return {
    props: {
      posts,
    },
  }
}

// posts/1,post/2,...
export async function getStaticPaths () {
  const posts = await getAllPosts();
  const paths = posts.map((post: PostType) => ({
    params: { id: post.id },
  }))
  return {
    paths,
    fallback: false,
  }
}

const Post= ({post}: Post) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
      <p className={styles.meta}>{post.author}</p>
      <p className={styles.meta}>{post.createdAt}</p>
    </div>
  )
}

export default Post;