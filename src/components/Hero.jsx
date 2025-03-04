import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Container from "./Container";
import { RxCaretRight } from "react-icons/rx";
import { smoothScrollTo } from "./Navbar";

function Hero() {
  const [inView, setInView] = React.useState(false);
  const ref = useRef();

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  // Fungsi untuk mengarahkan ke tautan WhatsApp
  const redirectToWhatsApp = () => {
    window.open(
      "https://wa.me/6283897897811?text=Hello%20Ubud%20Medical%20Assistance%2C%20I%20need%20Help%20For%20(Please%20tell%20us%20your%20problem)",
      "_blank"
    );
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setInView(entry.isIntersecting);
    };
  
    const options = {
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Save the current ref value to a variable
    const currentRef = ref.current;
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      // Use the variable in the cleanup function
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <animated.div
      className="w-full relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "./hero.jpeg"})`,
      }}
      id="Home"
      ref={ref}
    >
      <div className="w-full h-screen bg-black/70 bg-cover"></div>
      <animated.div
        className="absolute w-full h-full top-0 flex items-center"
        style={fadeIn}
      >
        <Container>
          <div className="md:w-7/12">
            <h1 className="text-main-500 text-xl font-bold leading-[36px] mb-3">
              WELCOME TO <br />{" "}
              <span className="text-white text-5xl">UBUD MEDICAL ASSISTANCE</span>
            </h1>
            <p className="text-white/85 mb-8">
              Discover unparalleled healthcare at Ubud Medical Assistance,
              where we provide state-of-the-art vaccines, tailor-made homecare
              services, on-call assistance, and comprehensive health insurance.
              Located in the vibrant heart of Ubud.
            </p>
            <div className="flex gap-8">
              <button
                className="btn-main btn-bs flex items-center gap-1.5 hover:gap-2"
                onClick={() => smoothScrollTo("About")}
              >
                Learn more <RxCaretRight className="text-2xl leading-[0px]" />{" "}
              </button>
              <button
                className="text-white/80 underline underline-offset-4 transition duration-300 hover:text-white/90"
                onClick={redirectToWhatsApp}
              >
                Contact us
              </button>
            </div>
          </div>
        </Container>
      </animated.div>
    </animated.div>
  );
}

export default Hero;
