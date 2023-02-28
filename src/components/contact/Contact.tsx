import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-2xl uppercase text-accent font-medium">
                Get in touch
              </h4>
              <h2 className="text-5xl lg:text-8xl uppercase mb-7">
                Let´s work together!
              </h2>
            </div>
          </motion.div>
          {/*form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 flex flex-col gap-y-5 border rounded-2xl p-6 pb-14 items-start"
          >
            <input
              className="bg-transparent border-b py-2 text-white placeholder:text-white outline-none w-full"
              type="text"
              placeholder="your name"
            />
            <input
              className="bg-transparent border-b py-2 text-white placeholder:text-white outline-none w-full"
              type="text"
              placeholder="your email"
            />
            <textarea
              className="bg-transparent border-b py-10 text-white placeholder:text-white outline-none w-full resize-none mb-5"
              placeholder="your message"
            ></textarea>
            <button className="btn btn-sm">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
