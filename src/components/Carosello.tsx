import React, { useEffect, useRef, useState } from "react";
import slide1 from "../assets/assetsCarosello/stadio.jpg";
import slide2 from "../assets/assetsCarosello/ranieri.jpg";
import slide3 from "../assets/assetsCarosello/giugliano.jpg";

const Carosello = () => {
  const [videoKey, setVideoKey] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const handleSlide = (event: any) => {
      const nextSlide = event.relatedTarget;
      const isVideoSlide = nextSlide.querySelector("iframe");
      if (!isVideoSlide) {
        setVideoKey((prev) => prev + 1);
      }
    };

    carouselElement.addEventListener("slide.bs.carousel", handleSlide);

    return () => {
      carouselElement.removeEventListener("slide.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      ref={carouselRef}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="Stadio" />
          <div className="carousel-caption d-none d-md-block">
            <h5>La nostra Roma</h5>
          </div>
        </div>

        <div className="carousel-item">
          <div className="ratio ratio-16x9">
            <iframe
              key={videoKey}
              src="https://www.youtube.com/embed/w7QVxewtoXI?start=3&autoplay=1&mute=1"
              title="Un ospite speciale"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>Un ospite speciale</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="Ranieri" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Le parole di Ranieri su Giugliano</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="Giugliano" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Giallorosse in Champions</h5>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carosello;
