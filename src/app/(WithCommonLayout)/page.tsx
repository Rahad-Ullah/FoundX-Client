import Banner from "@/src/components/modules/home/Banner";
import RecentPosts from "@/src/components/modules/home/RecentPosts";
import { Suspense } from "react";
import Loading from "./loading";
const Home = () => {
  return (
    <section>
      <Banner />
      <Suspense fallback={<Loading />}>
        <RecentPosts />
      </Suspense>
    </section>
  );
};
export default Home;
