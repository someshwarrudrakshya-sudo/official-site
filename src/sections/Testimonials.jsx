// Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/Testimonials.css";

import Rita from "../assets/testomonial/Rita.avif";
import Moti from "../assets/testomonial/Motiram.avif";
import Bishal from "../assets/noFace.avif";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: `म स्थापना देखिकै सदस्य हुँ। यो सहकारी हरेक सेवामा भरपर्दो छ। स्टाफको सहयोग सधैं सकारात्मक हुन्छ। मलाई कहिल्यै निराश पारेको छैन। धन्यवाद उत्कृष्ट सेवाका लागि!`,
      name: "रिता मगर",
      title: "होटल व्यवसायी",
      image: Rita,
      rating: 5,
    },
    {
      id: 2,
      quote: `पहिलो भेटमै राम्रो अनुभव भयो। हामीले तुरुन्तै सेवामा विश्वास गर्यौं। टिमले बढी प्रयास गरेर साथ दिन्छ। प्रत्येक कुरा ध्यानपूर्वक गरिन्छ। धन्यवाद अद्भुत सेवाको लागि!`,
      name: "मोति राम चौधरी",
      title: "हटिया व्यवसायी",
      image: Moti,
      rating: 4,
    },
    {
      id: 3,
      quote: `I had high expectations. This SACCOS exceeded them all. Service was smooth and caring. I felt valued every moment. I now recommend it to everyone!`,
      name: "Bishal Shrestha",
      title: "स्थानीय बुद्दिजीवी",
      image: Bishal,
      rating: 5,
    },
  ];

  return (
    <section className="container">
      <div className="section-title">
        <h2>
          What Our <span className="highlight">Members Say</span>
        </h2>
        <p>Real stories from our cooperative members</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="testimonial-card">
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>

              <div className="testimonial-footer">
                <div className="member-image">
                  <img src={t.image} alt={t.name} />
                </div>
                <div className="member-info">
                  <div className="name">{t.name}</div>
                  <div className="title">{t.title}</div>
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={i < t.rating ? "star filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
