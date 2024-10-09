import { getRecentPosts } from "@/src/services/RecentPosts";
import { subtitle, title } from "../../primitives";
import Containter from "../../UI/Containter";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();
  console.log(posts);
  return (
    <div>
      <Containter>
        <div className="text-center">
          <h1 className={title()}>Recent Posts</h1>
          <p className={subtitle()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            harum?
          </p>
        </div>
        <div>
          {posts?.map((post) => (
            <h1>{post.title}</h1>
          ))}
        </div>
      </Containter>
    </div>
  );
};

export default RecentPosts;
