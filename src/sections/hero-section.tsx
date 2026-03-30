import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

export function HeroSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5",
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5",
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.8,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile ? (
              <video
                src="/videos/hero-bg.mp4"
                autoPlay
                playsInline
                muted
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
            ) : null}
            {/* <img
              draggable="false"
              src="/images/hero-bg.jpg"
              alt="hero-img"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            /> */}
          </>
        ) : (
          <video
            src="https://res.cloudinary.com/ds6nd4lbj/video/upload/v1774892841/hero-bg_dzovjw.mp4"
            autoPlay
            playsInline
            muted
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">
              <strong>Graphics</strong> Designer
            </h1>
          </div>
          <div
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle text-center">
              <div className="flex max-sm:flex-col">
                <h1>3D Illustrator</h1>
                <h1>+ Animator</h1>
              </div>
            </div>
          </div>

          <h2 className="text-lg">
            Building tactile visuals, motion-led identities, and cinematic 3D
            frames for brands, campaigns, and culture-driven stories.
          </h2>
          <a href="mailto:contact@gmail.com" className="hero-button">
            <p>Contact Me</p>
          </a>
        </div>
      </div>
    </section>
  );
}
