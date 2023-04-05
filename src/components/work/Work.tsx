import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Img1 from "@/assets/portfolio-img1.png";
import Img2 from "@/assets/portfolio-img2.png";
import Img3 from "@/assets/portfolio-img3.png";
import { Workimg } from "./workimg";

export const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0.3)}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-full flex-col"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-7">
            {/* text */}
            <div className="md:p-5">
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
            <Workimg
              img={Img1}
              nameProjeto={"UI/UX Design"}
              title={"Project title"}
            />
            {/* img */}
            <Workimg
              img={Img2}
              nameProjeto={"Development"}
              title={"Project title"}
            />
            {/* img */}
            <Workimg
              img={Img3}
              nameProjeto={"Digital Marketing"}
              title={"Project title"}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
