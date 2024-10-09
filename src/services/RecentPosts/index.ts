import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () => {
  console.log(envConfig.baseApi);
  const res = await fetch(`${envConfig.baseApi}/items`);
  await delay(5000);
  return res.json();
};
