"use client";

import Image from "next/image";
import Slider from "react-slick";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
  };

  const images = [
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Modern Workspace",
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "Programming Setup",
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "Developer Environment",
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      title: "Team Collaboration",
    },
  ];

  return (
    <div className="mx-auto mt-10 p-2 w-full max-w-5xl overflow-hidden rounded-3xl ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="relative h-112 w-full">
              <Image
                src={`${image.url}?w=1200&q=80`}
                alt={image.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text Content */}
              <div className="absolute bottom-10 left-10 z-10 text-white">
                <h2 className="mb-2 text-4xl font-bold">{image.title}</h2>

                <p className="max-w-md text-sm text-gray-200">
                  Beautiful high-quality developer and technology themed images
                  using Next.js Image optimization.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
