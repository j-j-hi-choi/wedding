import MainPhoto from "../public/main-photo.jpg";
import Ribon from "../public/ribbon.png";
import Child from "../public/child-3.png";
import Calendar from "../public/calendar.png";
import Timeline from "../public/timeline.png";
import CalendarLabel from "../public/label/calendar-label.png";
import GalleryLabel from "../public/label/gallery-label.png";
import LocationLabel from "../public/label/location-label.png";
import TimelineLabel from "../public/label/timeline-label.png";
import AccountLabel from "../public/label/account-label.png";
import "./wedding.css";
import Gallery from "./Gallery";
import KakaoMap from "./KakaoMap";
import Direction from "./Direction.";
import Account from "./Account";
import Sentence from "./Sentence";
import Share from "./Share";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Wedding() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간
      once: false, // 스크롤 할 때 한 번만 실행
    });
  }, []);

  return (
    <div className="wedding-page">
      <div className="wedding-wrapper">
        <section className="main-photo">
          <img src={MainPhoto} alt="wedding-main-photo" />
        </section>

        <section className="wedding-sentence">
          <div className="wedding-name-place" data-aos="fade-up">
            <p>
              박호정<strong>♥</strong>최주희
            </p>
            <p>2025.12.06. 토요일 15:20</p>
            <p>엠스타하우스 모닝스타홀</p>
          </div>
          <img src={Ribon} alt="wedding-ribon" className="wedding-ribon" />
          <Sentence />
        </section>

        <section className="wedding-top">
          <img
            src={Child}
            alt="wedding-child"
            className="child"
            data-aos="fade-up"
          />
          <div className="wedding-calendar" data-aos="fade-up">
            <img
              src={CalendarLabel}
              alt="wedding-calendar-label"
              className="calendar-label"
            />
            <img src={Calendar} alt="wedding-calendar" />
          </div>
        </section>

        <section className="wedding-gallery" data-aos="fade-up">
          <img
            src={GalleryLabel}
            alt="wedding-gallery-label"
            className="gallery-label"
          />
          <Gallery />
        </section>

        <section className="wedding-location" data-aos="fade-up">
          <img
            src={LocationLabel}
            alt="wedding-location-label"
            className="location-label"
          />
          <KakaoMap />
          <Direction />
        </section>

        <section className="wedding-timeline" data-aos="fade-up">
          <img
            src={TimelineLabel}
            alt="wedding-timeline-label"
            className="timeline-label"
          />
          <div className="timeline-img-container">
            <img src={Timeline} alt="wedding-timeline-img" />
          </div>
        </section>

        <section className="wedding-bottom">
          <div className="wedding-account" data-aos="fade-up">
            <img
              src={AccountLabel}
              alt="wedding-account-label"
              className="account-label"
            />
            <Account />
          </div>

          <div className="wedding-share" data-aos="fade-up">
            <Share />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Wedding;
