import divider from "@/public/branch-divider.svg";
import logo from "@/public/icon-transparent.png";
import Image from "next/image";
import WeddingCountdown from "./WeddingCountdown";

const CardHero = () => {
  return (
    <div className="relative bottom-7.5 sm:-bottom-20 sm:absolute w-[96%] sm:w-[90%] max-w-195 z-20">
      <div className="relative z-20 bg-white text-center flex flex-col justify-center items-center gap-6 p-[38px_10%] sm:p-[45px_10%]">
        <Image
          src={logo}
          alt="Subtitle"
          width={100}
          height={0}
          className="object-contain h-auto"
        />
        <p className="subtitle text-accent uppercase">
          សូមអញ្ជើញចូលរួមពិធីមង្គលការរបស់យើង
        </p>
        <h1 className="heading-hero font-medium uppercase text-6xl">
          ធន & រ័ត្ន
        </h1>
        <WeddingCountdown />
        <Image
          src={divider}
          alt="Subtitle"
          width={120}
          height={0}
          className="object-contain h-auto"
        />
      </div>
    </div>
  );
};

export default CardHero;
