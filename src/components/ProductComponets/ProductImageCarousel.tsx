/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState, type FC, useEffect } from "react";
import { Navigation, Pagination, Thumbs } from "swiper";
import NavigateImageSliderButtons from "../elements/NavigateImageSliderButtons";
import Image from "next/image";

interface ImagesProps {
  images?: string[] | undefined;
  id?: string[];
  color?: string;
  productId?: string;
  setPrevImageEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  setNextImageEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  prevImageEl: HTMLElement | null;
  nextImageEl: HTMLElement | null;
}

export const ProductImageCarousel: FC<ImagesProps> = ({
  images,
  setPrevImageEl,
  setNextImageEl,
  prevImageEl,
  nextImageEl,
}) => {
  const [currentImage, setCurrentImage] = useState<string | undefined>(
    images && images.length > 0 ? images[0] : undefined
  );
  const changeCurrentImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedImage = (e.target as HTMLImageElement)?.currentSrc;
    if (clickedImage !== undefined) setCurrentImage(clickedImage);
  };
  useEffect(() => {
    setCurrentImage(images && images.length > 0 ? images[0] : undefined);
  }, [images]);

  console.log(images);

  return (
    <div className="h-full w-screen sm:w-96">
      <div className="h-full w-full sm:hidden">
        <Swiper spaceBetween={50} slidesPerView={1}>
          {images &&
            images.map((image, key) => (
              <SwiperSlide key={key}>
                <Image
                  // fill={true}
                  width={640}
                  height={640}
                  src={image}
                  alt="test"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="mb-3 hidden sm:block">
        <Image
          quality={100}
          className="h-full w-full object-cover"
          width={400}
          height={400}
          src={currentImage || ""}
          alt="previewImage"
        />
      </div>

      <div className="hidden h-full w-full sm:block">
        <Swiper
          navigation={{ prevEl: prevImageEl, nextEl: nextImageEl }}
          modules={[Navigation, Pagination, Thumbs]}
          spaceBetween={2}
          slidesPerView={4}
          // freeMode={true}
          watchSlidesProgress={true}
        >
          {images &&
            images.map((image, key) => (
              <SwiperSlide
                key={`${key}-bottomSwiper`}
                onClick={changeCurrentImage}
                className="mx-1 first:ml-0 last:mr-0 hover:cursor-pointer"
              >
                <img
                  // width={96}
                  // height={96}
                  className="object-cover"
                  src={image}
                  alt="images"
                />
              </SwiperSlide>
            ))}
        </Swiper>{" "}
        <div className="hidden sm:flex sm:items-center sm:justify-end sm:py-2">
          <NavigateImageSliderButtons
            setNextEl={setNextImageEl}
            setPrevEl={setPrevImageEl}
          />
        </div>
      </div>
    </div>
  );
};
