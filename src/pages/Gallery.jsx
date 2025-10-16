import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Note from "../components/Note.jsx";
import "./css/Gallery.css";

// 1️⃣ Dynamically import all images
const galleryImages = import.meta.glob("../assets/gallery/**/*.avif", { eager: true });

// 2️⃣ Convert imported images to structured data
const images = Object.entries(galleryImages).map(([path, module], index) => {
  const parts = path.split("/");
  const year = parts[parts.length - 3];
  const event = parts[parts.length - 2];
  const src = module.default;
  return {
    id: index + 1,
    year,
    event,
    src,
    alt: `${event} ${index + 1}`,
    desc: `${event} ${year}`,
  };
});

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);

  const uniqueYears = [...new Set(images.map(img => img.year))];
  const availableEvents =
    selectedYear === "All"
      ? []
      : [...new Set(images.filter(img => img.year === selectedYear).map(img => img.event))];

  const filteredImages = images.filter(img => {
    if (selectedYear === "All") return true;
    if (selectedEvent === "All") return img.year === selectedYear;
    return img.year === selectedYear && img.event === selectedEvent;
  });

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const showPrev = () =>
    setCurrentIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  const showNext = () =>
    setCurrentIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = e => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, filteredImages]);

  const handlers = useSwipeable({
    onSwipedLeft: showNext,
    onSwipedRight: showPrev,
    trackMouse: true,
  });

  return (
    <section className="container">
      <div className="gallery-page">
        {/* Title */}
        <div className="section-title">
          <h2>
            Our <span className="highlight">Gallery</span>
          </h2>
          <p>First select a year, then choose an event to filter images.</p>
        </div>

        {/* Year Filter */}
        <div className="filters">
          <button
            className={selectedYear === "All" ? "active" : ""}
            onClick={() => {
              setSelectedYear("All");
              setSelectedEvent("All");
            }}
          >
            All Years
          </button>
          {uniqueYears.map(year => (
            <button
              key={year}
              className={selectedYear === year ? "active" : ""}
              onClick={() => {
                setSelectedYear(year);
                setSelectedEvent("All");
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Event Filter */}
        {selectedYear !== "All" && (
          <div className="filters">
            <button
              className={selectedEvent === "All" ? "active" : ""}
              onClick={() => setSelectedEvent("All")}
            >
              All Events
            </button>
            {availableEvents.map(event => (
              <button
                key={event}
                className={selectedEvent === event ? "active" : ""}
                onClick={() => setSelectedEvent(event)}
              >
                {event}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map(({ id, src, alt }, index) => (
            <div
              key={id + "-" + selectedYear + "-" + selectedEvent}
              className="gallery-card"
              onClick={() => openModal(index)}
            >
              <LazyLoadImage
                src={src}
                alt={alt}
                effect="blur"
                placeholderSrc="/placeholder.png"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()} {...handlers}>
            <img
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].alt}
              className="modal-image"
              loading="lazy"
            />
            <p className="modal-desc">{filteredImages[currentIndex].desc}</p>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <button className="nav-btn prev" onClick={showPrev}>
              &#10094;
            </button>
            <button className="nav-btn next" onClick={showNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}

      {/* Note Section */}
      <Note type="Gallery" />
    </section>
  );
}
