<<<<<<< HEAD
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";

export const About = () => {
  const [ref, InView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 md:flex-row md:items-center md:gap-y-0">
          {/*image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/*text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3">i'am Front-end Developer</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              voluptas eos, perferendis quod quibusdam consequatur suscipit
              excepturi, cupiditate veniam magni, labore rem alias? Sunt tempora
              aut cumque sit maxime saepe?
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-5">
              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={0} end={10} duration={3} /> : null}
                  K+
                </div>
                <div className="text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <button className="btn btn-lg">Contact me</button>
              <a href="" className="text-gradient btn-link">
                My Portifolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
=======
import React from "react";

export const About = () => {
  return (
    <section className="section" id="about">
      About
>>>>>>> f973760829e18b114068b679a277916113eefa5b
    </section>
  );
};
