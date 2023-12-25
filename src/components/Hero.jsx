import React from "react";
import Container from "./Container";
import { RxCaretRight } from "react-icons/rx";
import { smoothScrollTo } from "./Navbar";

function Hero() {
  // Fungsi untuk mengarahkan ke tautan WhatsApp
  const redirectToWhatsApp = () => {
    window.open("https://wa.me/6285100811818", "_blank");
  };
  
  return (
    <div
      className="w-full relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "./hero.jpeg"})`,
      }}
      id="Home"
    >
      <div className="w-full h-screen bg-black/70 bg-cover"></div>
      <div className="absolute w-full h-full top-0 flex items-center">
        <Container>
          <div className="md:w-7/12">
            <h1 className="text-main-500 text-xl font-bold leading-[36px] mb-3">
              WELCOME TO <br />{" "}
              <span className="text-white text-5xl">UBUD MEDICAL ASSISTANCE</span>
            </h1>
            <p className="text-white/85 mb-8">
            Discover unparalleled healthcare at Ubud Medical Assistance, 
            where we provide state-of-the-art vaccines, tailor-made homecare services, 
            on-call assistance, and comprehensive health insurance. Located in the vibrant 
            heart of Ubud, we prioritize your well-being and ensure your comfort through our 
            advanced medical offerings. Your health, our commitment.
            </p>
            <div className="flex gap-8">
              <button className="btn-main btn-bs flex items-center gap-1.5 hover:gap-2" onClick={() => smoothScrollTo('About')}>
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
      </div>
    </div>
  );
}

export default Hero;
