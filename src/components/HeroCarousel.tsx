import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    eyebrow: "Smaci Ltd",
    title: "Structural and groundworks contractor based in London",
    description:
      "A clean first-stage hero section while we gradually integrate the full branded design, imagery, and reusable components.",
  },
  {
    id: 2,
    eyebrow: "Delivery Focused",
    title: "Built around reliability, coordination, and practical execution",
    description:
      "This temporary carousel establishes the structure now, so the final visual system can be layered in properly.",
  },
  {
    id: 3,
    eyebrow: "Specialist Capability",
    title: "Supporting residential, commercial, and infrastructure projects",
    description:
      "The final homepage will evolve from this scaffold into a polished contractor website with stronger visuals and content depth.",
  },
];

export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
          {activeSlide.eyebrow}
        </p>

        <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
          {activeSlide.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          {activeSlide.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center border border-black bg-black px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-black"
          >
            View Projects
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center justify-center border border-black px-7 py-4 text-base font-semibold text-black transition hover:bg-black hover:text-white"
          >
            About Us
          </Link>
        </div>

        <div className="mt-10 flex gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-10 bg-black" : "w-2.5 bg-black/20"
              }`}
              aria-label={`Go to slide ${slide.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};