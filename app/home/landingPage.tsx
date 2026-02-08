"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import rama from "@/public/branch-r.svg";
import img5 from "@/public/main-photos/pre-wedding-1.jpg";
import img9 from "@/public/main-photos/pre-wedding-2.jpg";
import img10 from "@/public/main-photos/pre-wedding-4.jpg";
import withKhmer from "@/public/withKhmer-trans.png";
import MapTabs from "../components/MapTabs";
import QrScan from "../components/QrScan";
import ScheduleTimeline from "../components/ScheduleTable";
import { khmer, moul } from "../fonts";

const LandingPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const enableAudio = async () => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
        audio.volume = 1;
        await audio.play();
        window.removeEventListener("click", enableAudio);
        window.removeEventListener("scroll", enableAudio);
        window.removeEventListener("keydown", enableAudio);
      } catch (err) {
        console.warn("Audio blocked, waiting for interaction", err);
      }
    };
    window.addEventListener("click", enableAudio);
    window.addEventListener("scroll", enableAudio);
    window.addEventListener("keydown", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("scroll", enableAudio);
      window.removeEventListener("keydown", enableAudio);
    };
  }, []);
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-fade-in bg-[#FFF8ED]">
      <audio ref={audioRef} src="/music/wedding-song.mp3" preload="auto" loop />
      <section
        id="hero"
        className="w-ful flex flex-col justify-center items-center px-5 pb-13.5 sm:pb-14.5 md:pb-16.5 lg:pb-18"
      >
        <div className="container-wide w-full md:max-w-300 flex-col items-center flex mt-17">
          <div className="hero-content w-full text-center flex-col items-center flex relative md:mb-10">
            <div className=" hero-gallery w-full grid grid-cols-[1fr_1.5fr_1fr] gap-2 md:grid-cols-3 md:gap-3.5 lg:gap-4.5 xl:gap-5">
              <div className="hero-gallery-item w-full overflow-hidden relative md:translate-y-0 translate-y-6">
                <Image
                  priority
                  className=" w-full object-cover h-[55vw] md:h-80vh rounded-xl md:rounded-none"
                  src={img9}
                  alt="Hero 1"
                />
              </div>

              <div className="hero-gallery-item w-full overflow-hidden relative z-10">
                <Image
                  priority
                  className=" w-full object-cover h-[55vw] md:h-80vh rounded-2xl md:rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:shadow-none"
                  src={img10}
                  alt="Hero Center"
                />
              </div>

              <div className="hero-gallery-item w-full overflow-hidden relative md:translate-y-0 translate-y-6">
                <Image
                  priority
                  className="
      w-full object-cover
      h-[55vw] md:h-80vh
      rounded-xl md:rounded-none
    "
                  src={img5}
                  alt="Hero 3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="greeting"
        className="container max-w-300 flex flex-col justify-center items-center py-10 md:py-20 px-5 mx-auto"
      >
        <div className="container-wide w-full flex flex-col items-center">
          <div className="w-full text-center flex flex-col items-center gap-6 relative">
            <Image
              src={rama}
              width={80}
              height={0}
              alt="Rama"
              className="h-auto object-contain mb-3.5"
            />
            <p className="text-lg " style={moul.style}>
              សូមគោរពអញ្ជើញ
            </p>
            <div className="text-content flex flex-col gap-6 max-w-3xl">
              <div className="flex justify-between md:gap-10 w-full">
                <h2
                  style={khmer.style}
                  className="  [@media(max-width:475px)]:text-sm text-lg md:text-2xl leading-relaxed md:leading-12.5 text-left"
                >
                  លោក <b className="ml-6 md:ml-7.5">ឆែ ប៊ុនថង</b> <br />
                  លោកស្រី <b>ហ៊ុយ ឃីម </b> <br />
                </h2>
                <h2
                  style={khmer.style}
                  className=" [@media(max-width:475px)]:text-sm text-lg md:text-2xl leading-relaxed md:leading-12.5 text-left"
                >
                  លោក <b className="ml-6 md:ml-7.5">នួន ណេង</b> <br />
                  លោកស្រី <b>ប៉ាល់ តេងឡាយ </b> <br />
                </h2>
              </div>
              <p
                style={khmer.style}
                className="[@media(max-width:475px)]:text-sm  text-base md:text-lg leading-5 max-w-prose text-center"
              >
                មានកិត្តិយសសូមគោរពអញ្ជើញឯកឧត្តមអ្នកឧកញ៉ាឧកញ៉ាលោកជំទាវលោក
                លោកស្រីអ្នកនាងកញ្ញាអញ្ជើញចូលរួមជាអធិបតីនិងជាភ្ញៀវកិត្តិយស
                ដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្តីជ័យមង្គលដល់គូស្វាមីភរិយាថ្មី
                ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍កូនប្រុស-កូនស្រីរបស់យើងខ្ញុំ។
              </p>
              <div className="relative flex  items-center sm:justify-center sm:gap-20 justify-between gap-6  my-10">
                <p
                  style={khmer.style}
                  className="text-lg md:text-xl text-center"
                >
                  កូនប្រុសនាម
                  <br />
                  <br />
                  <b>ផន សុខធន</b>
                </p>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src={withKhmer} width={80} height={80} alt="with" />
                </span>
                <p
                  style={khmer.style}
                  className="text-lg md:text-xl text-center"
                >
                  កូនស្រីនាម
                  <br />
                  <br />
                  <b>ណេង ឆៃរ័ត្ន</b>
                </p>
              </div>
              <p
                style={moul.style}
                className="text-lg [@media(max-width:475px)]:text-[16px] "
              >
                <span className="block mb-2">ដែលនឹងប្រព្រឹត្តទៅនៅ</span>
                <span className="block mb-2">
                  ថ្ងៃអាទិត្យទី០១ ខែមីនា ឆ្នាំ២០២៦
                </span>
                <span className="block mb-2">
                  ស្ថិតនៅភូមិព្រៃខ្មែរ ឃុំរលាប្អៀ ស្រុករលាប្អៀរ ខេត្តកំពង់ឆ្នាំង
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="location"
        className="flex-col justify-center items-center flex md:pb-19 px-5 overflow-hidden"
      >
        <div className="container-wide w-full max-w-300 flex-col items-center flex">
          <div className="guest-form-content w-full text-center flex-col items-center flex relative md:mb-10">
            <Image
              src={rama}
              width={80}
              alt="Rama"
              className="h-auto object-contain mb-3.5"
            />
            <br></br>
            <h2>
              ជ្រើសរើសទីកន្លែងដ៏ល្អឥតខ្ចោះដែលបង្ហាញពីស្នេហារបស់អ្នកទាំងពីរ។
            </h2>
            <MapTabs />
          </div>
        </div>
      </section>
      <section id="agenda" className="container-full section-styles px-5">
        <div className="content-section flex flex-col items-center justify-start gap-8">
          <div className="title-section container ">
            <div className="container-wide w-full max-w-300 flex flex-col items-center">
              <div className="guest-form-content w-full text-center flex flex-col items-center gap-6 relative">
                <Image
                  src={rama}
                  width={80}
                  alt="Rama"
                  className="h-auto object-contain mb-3.5"
                />
                <div className="text-content flex flex-col gap-6">
                  <h2 className="text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center"></h2>
                </div>
              </div>
            </div>
          </div>
          <ScheduleTimeline />
          <QrScan />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
