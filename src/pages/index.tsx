import Hero from "~/components/Hero";
import HomeScreenCategoriesSelect from "~/components/HomeScreenCategoriesSelect";
import MissionStatement from "~/components/MissionStatement";
import ProductSlider from "~/components/ProductSlider";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  console.log(hello);
  return (
    <>
      <Hero />
      <HomeScreenCategoriesSelect />
      <ProductSlider />
      <MissionStatement />
    </>
  );
}
