import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

type Props = {};

export const Footer = (props: Props) => {
  const styleLink = "cursor-pointer flex items-center gap-x-2";

  return (
    <footer className="shadow-lg py-16 w-full mt-16" id="footer">
      <div className="container mx-auto">
        <div className="flex lg:flex-row mb-10 justify-between">
          <div className="flex">
            <a href="" className="text-gradient">
              Carlos <br />
              <span className="text-white">Alessandro</span>
            </a>
          </div>
          <div className="flex flex-col lg:basis-1/2">
            <h3 className="h3">i'am Front-end Developer</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis impedit, incidunt asperiores tenetur maiores ut
              doloremque odit distinctio aliquam suscipit
            </p>
          </div>
          <div className="flex-col flex">
            <Link
              to="home"
              className={styleLink}
              activeClass="border-b text-accent"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BiHomeAlt />
              <span>Home</span>
            </Link>
            <Link
              to="about"
              className={styleLink}
              activeClass="border-b text-accent"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BiUser />
              <span>About</span>
            </Link>

            <Link
              to="services"
              className={styleLink}
              activeClass="border-b text-accent"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BsClipboardData />
              <span>Services</span>
            </Link>

            <Link
              to="work"
              className={styleLink}
              activeClass="border-b text-accent"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BsBriefcase />
              <span>Work</span>
            </Link>
            <Link
              to="contact"
              className={styleLink}
              activeClass="border-b text-accent"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BsChatSquare /> <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
