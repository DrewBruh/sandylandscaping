import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { face } from "../assets";

const Hero = () => {
  return (
    <>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px]
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white  uppercase`}>
              We're not just a Landscaping company we're{" "}
              <span
                className="sm:text-teal sm:text-[90px] 
                text-teal text-[50px] font-neue
                font-extrabold uppercase"
              >
                Sandy
              </span>
            </h1>
            {/* <p
              className={`${styles.heroSubText} mt-2 text-eerieblack uppercase tracking-[3px]`}
            >
              Take a look around and see what I've been working on!
              <br className="sm:block hidden" />
            </p> */}
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        ></div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[30vw] 
            lg:ml-[65vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={face}
            alt="cool logo"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
