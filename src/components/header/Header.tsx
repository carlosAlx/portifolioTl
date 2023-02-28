import Logo from "@/assets/logo.svg";
import Logopng from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="py-6  shadow-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="" className="text-gradient">
            Carlos <br />
            <span className="text-white">Alessandro</span>
          </a>
          <button className="btn btn-sm">work with me</button>
        </div>
      </div>
    </header>
  );
};
