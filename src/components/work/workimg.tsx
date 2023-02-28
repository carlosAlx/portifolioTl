import { ImgsWorkType } from "./type";

export const Workimg = ({ img, title, nameProjeto }: ImgsWorkType) => {
  return (
    <div className="lg:basis-5/12 flex group relative overflow-hidden border-2 border-white/50 rounded-xl">
      <div className="group-hover:bg-black/70 w-full h-full z-40 transition-all duration-300 absolute"></div>
      <img
        className="group-hover:scale-125 transition-all duration-500"
        src={img}
        alt=""
      />
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
        <h4 className="text-gradient">{title}</h4>
        <h5 className="text-white text-2xl">{nameProjeto}</h5>
      </div>
    </div>
  );
};
