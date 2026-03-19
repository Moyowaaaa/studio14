import React, { useState, useRef, useCallback, useEffect } from "react";
import impactImage2 from "../../assets/images/impact-image2.png";
import impactImage3 from "../../assets/images/impact-image3.png";

const filters = ["Filter 1", "Filter 2", "Filter 3"] as const;

const slides = [
  {
    image: impactImage2,
    title: "How EAB changed my life",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    cta: "Discover",
  },
  {
    image: impactImage2,
    title:
      "EAB Partners with Global Fund for Women to Support Girls in Sub-Saharan Africa",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    cta: "Discover",
  },
  {
    image: impactImage3,
    title: "How EAB changed my life",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    cta: "Discover",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export const ImpactSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isScrollingFromClick = useRef(false);
  const autoPlayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  const goToSlide = useCallback((index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const slideElements = container.children;
    if (slideElements[index]) {
      isScrollingFromClick.current = true;
      activeIndexRef.current = index;
      setActiveIndex(index);

      const slide = slideElements[index] as HTMLElement;
      const scrollLeft =
        slide.offsetLeft -
        container.offsetLeft -
        (container.clientWidth - slide.clientWidth) / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingFromClick.current = false;
      }, 600);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (isScrollingFromClick.current) return;

    const container = carouselRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      activeIndexRef.current = 0;
      setActiveIndex(0);
      return;
    }

    const progress = scrollLeft / maxScroll;
    const newIndex = Math.min(
      Math.round(progress * (slides.length - 1)),
      slides.length - 1,
    );
    activeIndexRef.current = newIndex;
    setActiveIndex(newIndex);
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const startAutoPlay = useCallback(() => {
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    autoPlayTimer.current = setInterval(() => {
      if (isPaused.current) return;
      const next = (activeIndexRef.current + 1) % slides.length;
      goToSlide(next);
    }, AUTO_PLAY_INTERVAL);
  }, [goToSlide]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [startAutoPlay]);

  const handleFilterClick = useCallback(
    (index: number) => {
      goToSlide(index);
      startAutoPlay();
    },
    [goToSlide, startAutoPlay],
  );

  const handleMouseEnter = useCallback(() => {
    isPaused.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPaused.current = false;
    startAutoPlay();
  }, [startAutoPlay]);

  return (
    <>
      <div className="w-full bg-[#EDF5FF] pt-[60px] pb-[80px] md:pt-[7.1875rem] md:pb-[9.25rem] flex flex-col gap-[40px] md:gap-[62px]">
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-[162px] flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
          <div className="flex flex-col gap-4 md:gap-[29px]">
            <h1 className="font-semibold text-[40px] md:text-[3.75rem] leading-[120%] md:leading-[100%]">
              The impact of EAB
            </h1>

            <p
              className="text-[18px] md:text-[1.25rem] 
              max-w-full md:max-w-[45.4375rem]
              leading-[164%] md:leading-[130%] font-[source-sans-pro]"
            >
              Consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
              vitae congue
            </p>
          </div>

          <div className="w-full md:w-max flex flex-wrap items-center gap-[7px] pt-2">
            {filters.map((filter, index) => (
              <React.Fragment key={filter}>
                <button
                  onClick={() => handleFilterClick(index)}
                  className={`leading-[120%] text-[20px] md:text-[1.5rem] font-bold font-[source-sans-pro] transition-colors duration-300 cursor-pointer ${
                    activeIndex === index
                      ? "text-black"
                      : "text-[#95A4B8] hover:text-[#6b7a8d]"
                  }`}
                >
                  {filter}
                </button>
                {index < filters.length - 1 && (
                  <span className="text-[24px] md:text-[2rem] text-[#95A4B8] leading-[100%] tracking-[-2%] font-semibold select-none">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full overflow-x-auto flex items-start gap-[20px] md:gap-[30px] snap-x snap-mandatory scroll-smooth hide-scrollbar px-6 md:px-0"
          style={{ scrollbarWidth: "none" }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full min-w-full md:w-[67.0625rem] md:min-w-[67.0625rem] mx-auto h-max flex flex-col md:flex-row items-start md:items-center gap-[27px] md:gap-[47px] snap-center"
            >
              <div className="h-[362px] md:h-[36.9375rem] w-full md:w-[40.8125rem] md:min-w-[40.8125rem] overflow-hidden rounded-lg md:rounded-none">
                <img
                  src={slide.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-[16px] md:gap-[27px] w-full">
                <h1 className="font-[source-serif] font-semibold text-[24px] md:text-[2.5rem] leading-[120%] w-full md:max-w-[383px] md:min-w-[383px]">
                  {slide.title}
                </h1>
                <p
                  className="text-[18px] md:text-[1.25rem] 
                  w-full md:max-w-[383px] md:min-w-[383px]
                  leading-[164%] font-[source-sans-pro]"
                >
                  {slide.description}
                </p>

                <div className="flex items-center gap-[1.0625rem] group w-max cursor-pointer mt-2 md:mt-0">
                  <div className="w-[54px] h-[53px] md:w-[3.375rem] md:h-[3.3125rem] rounded-[30px] md:rounded-full flex items-center justify-center bg-[#009482] transition-transform duration-300 group-hover:translate-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="22"
                      viewBox="0 0 13 22"
                      fill="none"
                    >
                      <path
                        d="M2 19.9167L10.9583 10.9584L2 2.00008"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="font-bold text-[24px] md:text-[1.5rem] leading-[120%] font-[source-sans-pro] transition-colors duration-300 group-hover:text-[#009482]">
                    {slide.cta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
