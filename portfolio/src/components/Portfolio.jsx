import React from "react";
import nord from "../assets/Images/Nordstrom.png";
import bangood from "../assets/Images/Banggood.png";
import clockify from "../assets/Images/Clock.PNG";
import bewakoof from "../assets/Images/bkf.PNG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: nord,
      code: "https://github.com/hitesht4/nordstrom",
      demo: "https://nordstrom-react-101.vercel.app/",
    },
    {
      id: 3,
      src: bewakoof,
      code: "https://github.com/hitesht4/Bevakoof",
      demo: "https://bkf-eight.vercel.app/",
    },
    ,
    {
      id: 2,
      src: clockify,
      code: "https://github.com/hitesht4/legit-dust-8169",
      demo: "https://clockify-omega.vercel.app/",
    },
    {
      id: 4,
      src: bangood,
      code: "https://github.com/hitesht4/Banggood-Clone",
      demo: "https://illustrious-centaur-362a7e.netlify.app/",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((item) => (
            <div key={item.d} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={item.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={item.demo}
                  target="blank"
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={item.code}
                  target="blank"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
