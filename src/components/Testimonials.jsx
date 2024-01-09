import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Testimonials() {
  const data = [
    {
      nama: "Alice Johnson",
      work: "25 Years Old",
      foto: "https://img.freepik.com/free-photo/portrait-young-confident-female-model-girl-casual-clothes-posing-outside-near-glass-building-s_1258-125682.jpg?w=1060&t=st=1703940701~exp=1703941301~hmac=549930f08e549792aa37eb95151edf90266afb058a44c7347b63cb3fe31fd574",
      testi: "Professionalism and kindness define the care at this clinic.",
    },
    {
      nama: "Bob Smith",
      work: "29 Years Old",
      foto: "https://img.freepik.com/free-photo/handsome-tall-arabian-beard-man-model-stripped-shirt-posed-outdoor-fashionable-arab-guy_627829-14456.jpg?w=1060&t=st=1703940167~exp=1703940767~hmac=783cf6a654a5a92b20cde094da1447fb06d0f229407daea685f2e966a0b9b4f7",
      testi: "Skilled doctors and nurses who genuinely care about their patients.",
    },
    {
      nama: "Charlie Davis",
      work: "20 Years Old",
      foto: "https://img.freepik.com/free-photo/teen-boy-writing-notebook_23-2147668970.jpg?w=1060&t=st=1703940570~exp=1703941170~hmac=d46cb91dfc980c572df4d862fdcdb207f548f307196b48f73ca6060a1d79144f",
      testi: "I appreciate the professionalism and kindness of the entire clinic staff.",
    },
    {
      nama: "Diana Miller",
      work: "24 Years Old",
      foto: "https://img.freepik.com/free-photo/young-pretty-woman-casual-summer-style-modern-park-street_285396-10796.jpg?w=1060&t=st=1703940915~exp=1703941515~hmac=a8fa95b880a7a9b92bf53eab4c7fbff3436efccb06162594e373a762539a1092",
      testi: "Thoroughly impressed by the caring and competent medical team.",
    },
    {
      nama: "Evan Wilson",
      work: "22 Years Old",
      foto: "https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg?w=360&t=st=1703941005~exp=1703941605~hmac=b5c1da1c846d0a4413b92f355e7d1e9a59188dd052d70d4868ca38624d941ada",
      testi: "The clinic provides excellent care, and the staff is exceptionally kind.",
    },
  ];

  const [currIdx, setCurrIdx] = useState(0);

  return (
    <div className="py-28 bg-main-200" id="Testimoni">
      <div className="w-11/12 2xl:w-[1440px] mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className=" text-3xl font-bold text-main-800 text-center">
            What Our Customer Saying
          </h1>
          <div className=" border-b-2 border-2 border-main-700 w-11 mt-4"></div>
        </div>
        <div className="overflow-hidden max-w-[1000px] mx-auto">
          <div
            className="flex transition-transform duration-300 ease-in-out transform"
            style={{
              width: `${data.length * 100}%`,
              transform: `translateX(-${(currIdx / data.length) * 100}%)`,
            }}
          >
            {/* {data.map((card, index) => (
                <div
                    key={index}
                    className="w-full flex items-center justify-center p-4"
                >
                    <div className="bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-lg font-semibold mb-2">{card.nama}</h2>
                    <p>{card.testi}</p>
                    </div>
                </div>
                ))} */}

            {data.map((data, idx) => (
              <div
                key={idx}
                className="w-full flex items-center justify-center p-4"
              >
                <div className="p-8 h-full bg-gradient-to-tr from-main-800 to-main-500 text-white rounded-3xl flex flex-col items-center justify-between">
                  <div className="flex flex-col items-center">
                  <div
                      className="w-24 h-24 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + data.foto
                        })`,
                      }}
                    ></div>
                    <p className="text-lg font-medium my-4 mx-auto max-w-[auto] text-center">
                      "{data.testi}"
                    </p>
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-white/90 underline underline-offset-4 text-center">
                      {data.nama}
                    </h6>
                    <p className="text-lg font-medium text-white/70 text-center">
                      {data.work}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8 justify-center mt-5">
          <FaArrowLeft
            className="text-xl text-main-600"
            onClick={() =>
              setCurrIdx(currIdx === 0 ? data.length - 1 : currIdx - 1)
            }
          />
          <FaArrowRight
            className="text-xl text-main-600"
            onClick={() =>
              setCurrIdx(currIdx === data.length - 1 ? 0 : currIdx + 1)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;