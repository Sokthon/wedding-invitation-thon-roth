import logo from "@/public/icon-transparent.png";
import Image from "next/image";

const CardHero = () => {
  return (
    <div className="relative bottom-7.5 sm:-bottom-20 sm:absolute w-[96%] sm:w-[90%] max-w-150 z-20">
      <div className="relative z-20 bg-[#f5e6ce] text-center flex flex-col justify-center items-center gap-6 p-[30px_8%] sm:p-[30px_6%] shadow-[0_0_30px_rgba(245,230,206,0.7)]">
        <Image
          src={logo}
          alt="Subtitle"
          width={300}
          height={0}
          className="object-contain h-auto"
        />
      </div>
    </div>
  );
};

export default CardHero;
