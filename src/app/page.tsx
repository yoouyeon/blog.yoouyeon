import PostList from "@/components/PostList";
import Bio from "@/components/Bio";

export default async function Home() {
  return (
    <div className="px-5">
      <Bio />
      <PostList />
    </div>
  );
}
