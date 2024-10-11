import { subtitle, title } from "@/src/components/primitives";
import Card from "@/src/components/UI/Card";
import Containter from "@/src/components/UI/Containter";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { IPost } from "@/src/types";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();

  return (
    <div>
      <Containter>
        <div className="text-center mb-10">
          <h1 className={title()}>Recent Posts</h1>
          <p className={subtitle()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            harum?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post: IPost) => <Card key={post._id} post={post} />)}
        </div>
      </Containter>
    </div>
  );
};

export default RecentPosts;
