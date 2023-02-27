import Logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm">work with me</button>
        </div>
      </div>
    </header>
  );
};
