import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gallery1 from "../public/gallery/01.jpg";
import gallery2 from "../public/gallery/02.jpg";
import gallery3 from "../public/gallery/03.jpg";
import gallery4 from "../public/gallery/04.jpg";
import gallery5 from "../public/gallery/05.jpg";
import gallery6 from "../public/gallery/06.jpg";
import gallery7 from "../public/gallery/07.jpg";
import gallery8 from "../public/gallery/08.jpg";
import gallery9 from "../public/gallery/09.jpg";
import gallery10 from "../public/gallery/10.jpg";
import gallery11 from "../public/gallery/11.jpg";
import gallery12 from "../public/gallery/12.jpg";
import gallery13 from "../public/gallery/13.jpg";
import gallery14 from "../public/gallery/14.jpg";
import gallery15 from "../public/gallery/15.jpg";
import next from "../public/next-image.gif";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Gallery() {
  const [isBeginning, setIsBeginning] = useState(true);
  const prevRef = useRef<HTMLDivElement>(null);
  const handleSlideChange = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
  };

  return (
    <div className="wedding-gallery-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onInit={handleSlideChange}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: prevRef.current,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation]}
        className="wedding-gallery-swiper"
      >
        <SwiperSlide>
          <img src={gallery1} alt="wedding-gallery-1" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} alt="wedding-gallery-2" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery3} alt="wedding-gallery-3" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery4} alt="wedding-gallery-4" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery5} alt="wedding-gallery-5" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery6} alt="wedding-gallery-6" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery7} alt="wedding-gallery-7" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery8} alt="wedding-gallery-8" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery9} alt="wedding-gallery-9" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery10} alt="wedding-gallery-10" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery11} alt="wedding-gallery-11" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery12} alt="wedding-gallery-12" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery13} alt="wedding-gallery-13" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery14} alt="wedding-gallery-14" className="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery15} alt="wedding-gallery-15" className="gallery" />
        </SwiperSlide>
      </Swiper>

      {/* 다음 버튼: 첫 슬라이드일 때만 보임 */}
      {isBeginning && (
        <div ref={prevRef} className="wedding-gallery-nav wedding-gallery-next">
          <img src={next} alt="next-image" className="" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
