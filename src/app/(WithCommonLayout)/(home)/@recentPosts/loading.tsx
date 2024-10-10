import { subtitle, title } from "@/src/components/primitives";
import CardSkeleton from "@/src/components/UI/CardSkeleton";
import Containter from "@/src/components/UI/Containter";

const loading = async () => {
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
          {[...Array(9)].map(() => (
            <CardSkeleton />
          ))}
        </div>
      </Containter>
    </div>
  );
};

export default loading;
