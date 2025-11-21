import PostList from "@/components/PostList";
import Bio from "@/components/Bio";

export default async function Home() {
  return (
    <>
      <Bio />
      <PostList />
    </>
  );
}
