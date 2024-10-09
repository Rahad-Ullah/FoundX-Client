import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

const Banner = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3NlcyUyMGJlYWNofGVufDB8fDB8fHww')] bg-cover bg-center flex items-center justify-center">
      <Input
        placeholder="Search here"
        startContent={<SearchIcon />}
        className="max-w-screen-sm"
      />
    </div>
  );
};

export default Banner;
