/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { FC } from "react";

interface ImagesProps {
  images: string[];
}

export const ProductImageCarousel: FC<ImagesProps> = ({ images }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, key) => (
          <SwiperSlide key={key}>
            <img src={image} alt="test" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
