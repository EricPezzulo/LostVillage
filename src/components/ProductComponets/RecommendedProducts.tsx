/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { type FC } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "~/utils/api";

interface Variant {
  id: string;
  color: string;
  images: string[];
  productId: string;
}
interface ElementProps {
  prevEl: HTMLElement | null;
  nextEl: HTMLElement | null;
  setVarSelected: React.Dispatch<React.SetStateAction<Variant[] | null>>;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}

const RecommendedProducts: FC<ElementProps> = ({
  prevEl,
  nextEl,
  setVarSelected,
  setSelectedSize,
}) => {
  const { data } = api.products.getAll.useQuery();

  if (!data?.products) return <div>loading</div>;
  return (
    <div className="w-screen sm:w-full">
      <Swiper
        navigation={{ prevEl, nextEl }}
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          550: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {data?.products?.map((elem, key) => (
          <SwiperSlide key={key}>
            <Link
              href={`/products/${elem.productId}`}
              type="button"
              onClick={() => {
                setVarSelected(
                  elem?.variants?.[0]?.images?.[0] ? [elem.variants[0]] : null
                );
                setSelectedSize(null);
              }}
            >
              <img
                src={elem?.variants?.[0]?.images?.[0]}
                alt={elem?.title || "unknown"}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProducts;
