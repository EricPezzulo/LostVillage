/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface ElementProps {
  prevEl: HTMLElement | null;
  nextEl: HTMLElement | null;
}

const RecommendedProducts: FC<ElementProps> = ({ prevEl, nextEl }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex w-full">
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
        {arr.map((elem, key) => (
          <SwiperSlide key={key}>
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fd8d57f-23c4-418e-9876-1eb1458e31d7/air-vapormax-2021-flyknit-mens-shoes-NpTfFz.png"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProducts;
