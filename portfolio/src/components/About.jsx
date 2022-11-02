import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I've always been fascinated by how things work. The same has been
          applicable for computers. Being a BCA student it encouraged me to
          explore the world of technology. As I grew up my interest pushed me to
          learn Full Stack web Development.. I'm a passionate Web Developer
          skilled in React.Js , MongoDb, Express,Js , Node.Js and Data
          Structures and Algorithms,. I have transitioned from having zero
          coding knowledge to building user-friendly and deployable websites in
          a span of 6 months. This journey has been quite informative and
          interesting. I always took the goal-oriented path to complete the
          tasks at hand. I want to explore much more in Web development, I like
          learning new technologies and implementing them to solve real world
          problems. Passionate about building challenging projects and excelling
          in their development. Team player with effective communication and
          problem-solving skills.
        </p>

        <br />

        <p className="text-xl">
          I am looking forward to obtaining the position of a developer to give
          my best to enhance the end-user experience.
          <br /> You can contact me on -hiteshtarwani4@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default About;
