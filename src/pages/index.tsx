import Hero from "~/components/Hero";
import HomeScreenCategoriesSelect from "~/components/HomeScreenCategoriesSelect";
import MissionStatement from "~/components/MissionStatement";
import ProductSlider from "~/components/ProductSlider";
import { api } from "~/utils/api";

export default function Home() {
  const { data } = api.reviews.getAll.useQuery();

  return (
    <>
      <Hero />
      <HomeScreenCategoriesSelect />
      <ProductSlider />
      <MissionStatement />
    </>
  );
}
