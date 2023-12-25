import React, { useState } from "react";
import Container from "./Container";

function About() {
  const [isTruncate, setIsTruncate] = useState(true)

  return (
    <div className="h-fit bg-main-200" id="About">
      <Container>
        <div className="flex max-md:flex-col py-28 max-md:gap-10 gap-20 items-center">
          <div className="w-full md:w-1/2">
            <h6 className=" text-lg font-bold text-main-600">About Us</h6>
            <h1 className="text-4xl font-bold">Health is our main concern</h1>
            <div className={`${isTruncate ? 'line-clamp-3' : 'line-clamp-none'} mb-7 mt-5 transition duration-300`}>
              <p className="text-gray-500 mb-2">
              Welcome to Ubud Medical Assistance,
              located in the heart of Ubud's lively
              community. Our team of healthcare experts
              is dedicated to offering top-notch care in a
              nurturing environment, ensuring a pleasant
              and calming patient journey. Our guiding
              principle, "Commitment to Excellence in
              Healthcare," drives us to provide superior
              medical services.
              </p>
              <p className="text-gray-500 mb-2">
              We offer a broad
              spectrum of healthcare solutions, including
              cutting-edge rabies vaccines for your
              protection, and personalized homecare
              and on-call services for your utmost
              convenience and comfort.
              </p>
              <p className="text-gray-500 mb-2">
              Additionally, we
              offer health insurance options, underlining
              our commitment to your holistic health. At
              Ubud Medical Assistance, we don't just
              provide healthcare services; we are deeply
              committed to your overall well-being.
              </p>
            </div>
            <button className={`${isTruncate ? 'btn-main' : 'btn-nd'} btn-sm`} onClick={() => setIsTruncate(!isTruncate)}>{isTruncate ? 'Show more' : 'Show less'}</button>
          </div>
          <div className="max-md:w-full w-1/2 max-md:h-[300px] h-[400px] bg-cover bg-center bg-slate-600 rounded-3xl" style={{backgroundImage: `url(${process.env.PUBLIC_URL + './about-sect.jpeg'})`}}></div>
        </div>
      </Container>
    </div>
  );
}

export default About;
