import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

export const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex w-full flex-col">
          <div className="w-full flex flex-wrap items-center justify-center gap-7">
            {/* text */}
            <div className="lg:basis-5/12 md:p-5">
              <h2 className="h2 leading-tight text-accent">My Lasted Work</h2>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis impedit, incidunt asperiores tenetur maiores ut
                doloremque odit distinctio aliquam suscipit alias optio facilis
                debitis error. Amet ipsam obcaecati cumque corrupti.
              </p>
              <button className="btn btn-sm mt-7">View all projects</button>
            </div>
            {/* img */}
            <div className="lg:basis-5/12 flex group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full z-40 transition-all duration-300 absolute"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <h4 className="text-gradient">UI/UX Design</h4>
                <h5 className="text-white text-2xl">Project title</h5>
              </div>
            </div>
            {/* img */}
            <div className="lg:basis-5/12 group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full z-40 transition-all duration-300 absolute"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <h4 className="text-gradient">UI/UX Design</h4>
                <h5 className="text-white text-2xl">Project title</h5>
              </div>
            </div>
            {/* img */}
            <div className="lg:basis-5/12 group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full z-40 transition-all duration-300 absolute"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <h4 className="text-gradient">UI/UX Design</h4>
                <h5 className="text-white text-2xl">Project title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
