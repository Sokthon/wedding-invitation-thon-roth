"use client";
import { battambang, moul } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WeddingInvite() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => {
      router.push("/home");
    }, 400);
  };
  return (
    <main
      className={`relative min-h-screen flex items-center justify-center px-5
      bg-[#FFF8ED] text-[#3B2B20] ${battambang.className} scroll-smooth
        transition-opacity duration-400 ease-in-out
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
      style={{
        backgroundImage: "url('/images/bg-pattern.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md text-center space-y-6">
        <div className="text-4xl text-[#C9A24D]">❀</div>

        <h1 className={`text-3xl text-[#5A4638] ${moul.className} leading-12`}>
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h1>

        <p className="text-3xl font-semibold text-amber-800">សុខធន & ឆៃរ័ត្ន</p>

        <p className="text-lg text-[#5A4638] leading-7">
          សូមគោរពអញ្ជើញ
          <br />
        </p>
        <button
          onClick={handleEnter}
          className="
        bg-[#B0925C] text-white
        text-lg sm:text-[20px]
        px-10 py-4 rounded-lg
        transition-all duration-300
        shadow-[0_4px_10px_rgba(0,0,0,0.25)]
        active:scale-95 hover:brightness-110
      "
        >
          អញ្ជើញចូល
        </button>
      </div>
    </main>
  );
}
