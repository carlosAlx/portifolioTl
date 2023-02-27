import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

export const Nav = () => {
  const styleLink =
    "cursor-pointer w-[60px] h-[60px] flex items-center justify-center";
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-10">
      <div className="container mx-auto">
        <div className="bg-black/30 w-full h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] px-5 mx-auto flex items-center justify-between text-2xl text-yellow-50">
          <Link
            to="home"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            className={styleLink}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};
