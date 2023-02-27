import { motion } from "framer-motion";
import {
  BsArrowUpRight,
  BsArrowUpLeft,
  BsLayoutThreeColumns,
} from "react-icons/bs";
import { fadeIn } from "../variants";

type TypeService = {
  name: string;
  description: string;
  link: string;
};

const services: TypeService[] = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita et ut autem provident sit laudantium molestiae, cum sed dolore, fuga accusantium modi vero esse ea tempore maiores, liberosint!",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita et ut autem provident sit laudantium molestiae, cum sed dolore, fuga accusantium modi vero esse ea tempore maiores, liberosint!",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita et ut autem provident sit laudantium molestiae, cum sed dolore, fuga accusantium modi vero esse ea tempore maiores, liberosint!",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita et ut autem provident sit laudantium molestiae, cum sed dolore, fuga accusantium modi vero esse ea tempore maiores, liberosint!",
    link: "Learn more",
  },
];

export const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container max-auto">
        <div className="flex flex-col md:flex-row">
          {/* text and image*/}

          <div className="flex-1 md:bg-services no bg-no-repeat bg-bottom mix-blend-lighten">
            <h2 className="h2 text-accent">What i do.</h2>
            <h3 className="h3">i'am Front-end Developer</h3>
            <button className="btn btn-sm">See my work</button>
          </div>

          {/* services */}
          <div className="flex-1">
            <div>
              {services.map((list, index) => {
                const { name, description, link } = list;
                return (
                  <div key={index}>
                    <div>
                      <h4 className="h4">{name}</h4>
                      <p>{description}</p>
                    </div>
                    <div>link</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
