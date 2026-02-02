"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

import rama from "@/public/branch-r.svg";
import img5 from "@/public/main-photos/pre-wedding-1.jpg";
import img9 from "@/public/main-photos/pre-wedding-2.jpg";
import img10 from "@/public/main-photos/pre-wedding-4.jpg";
import withKhmer from "@/public/withKhmer.png";
import CardHero from "./components/CardHero";
import MapTabs from "./components/MapTabs";
import ScheduleTable from "./components/ScheduleTable";
import { khmer } from "./fonts";

export default function Home() {
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

  return (
    <>
      <audio ref={audioRef} src="/music/wedding-song.mp3" preload="auto" loop />
      <section
        id="hero"
        className="w-ful flex flex-col justify-center items-center px-5 pb-13.5 sm:pb-14.5 md:pb-16.5 lg:pb-18"
      >
        <div className="container-wide w-full md:max-w-300 flex-col items-center flex">
          <div className="hero-content w-full text-center flex-col items-center flex relative md:mb-10">
            <div className="hero-gallery w-full grid grid-cols-3 xl:gap-5 lg:gap-4.5 md:gap-3.5 gap-1">
              <div className="hero-gallery-item w-full overflow-hidden relative">
                <Image
                  priority
                  className="w-full object-cover h-[70vw] md:h-80vh min-h-auto md:min-h-150"
                  src={img9}
                  alt="Hero 1"
                />
              </div>
              <div className="hero-gallery-item w-full overflow-hidden relative">
                <Image
                  priority
                  className="w-full object-cover h-[70vw] md:h-80vh min-h-auto md:min-h-150"
                  src={img5}
                  alt="Hero 2"
                />
              </div>
              <div className="hero-gallery-item w-full overflow-hidden relative">
                <Image
                  priority
                  className="w-full object-cover h-[70vw] md:h-80vh min-h-auto md:min-h-150"
                  src={img10}
                  alt="Hero 3"
                />
              </div>
            </div>
            <CardHero />
          </div>
        </div>
      </section>
      <section
        id="greeting"
        className="container max-w-300 flex flex-col justify-center items-center py-20 px-5 mx-auto"
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
            <div className="text-content flex flex-col gap-6 max-w-3xl">
              <div className="flex flex-row justify-between ">
                <h2
                  style={khmer.style}
                  className="text-xl md:text-2xl font-normal md:leading-[50.16px] text-left"
                >
                  លោក <b className="ml-7.5">ឆែ ប៊ុនថង</b> <br />
                  លោកស្រី <b>ហ៊ុយ ឃីម </b> <br />
                </h2>
                <h2
                  style={khmer.style}
                  className="text-xl md:text-2xl font-normal md:leading-[50.16px] text-left"
                >
                  លោក <b className="ml-7.5">នួន ណេង</b> <br />
                  លោកស្រី <b>ប៉ាល់ តេងឡាយ </b> <br />
                </h2>
              </div>
              <p style={khmer.style} className="text-lg">
                មានកិត្តិយសសូមគោរពអញ្ជើញ ឯកឧត្តម អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក
                លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស
                ដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្តីជ័យមង្គលដល់គូស្វាមីភរិយាថ្មី
                ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ ។
              </p>
              <div className="flex relative justify-center gap-10 my-10">
                <p style={khmer.style} className="text-lg md:text-xl">
                  កូនប្រុសនាម
                  <br />
                  <br />
                  <b>ផន សុខធន</b>
                </p>
                <Image src={withKhmer} width={80} height={80} alt="with" />
                <p style={khmer.style} className="text-lg md:text-xl">
                  កូនស្រីនាម
                  <br />
                  <br />
                  <b>ណេង ឆៃរ័ត្ន</b>
                </p>
              </div>
              <p style={khmer.style} className="text-lg">
                ពិសារភោជនាហារ ថ្ងៃអាទិត្យ ទី០១ ខែមីនា ឆ្នាំ២០២៦ ត្រូវនឹងថ្ងៃ
                ១៣កើត ខែផល្តូ ឆ្នាំម្សាញ់ សម្ភស័ក ពុទ្ធសករាជ ២៥៦៩ វេលាម៉ោង ៤:០០
                រសៀល នៅ គេហដ្ឋានខាងស្រី ស្ថិតនៅ ភូមិព្រៃខ្មែរ ឃុំរលាប្អៀ
                ស្រុករលាប្អៀរខេត្តកំពង់ឆ្នាំង ដោយមេត្រីភាព ។ (
                <a href="#location" className="smooth-scroll font-bold">
                  សូមពិនិត្យប្លង់ខាងក្រោម
                </a>
                ) សូមអរគុណ!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="location"
        className="flex-col justify-center items-center flex md:pb-19 px-5"
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
            <h2
              style={khmer.style}
              className="text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center"
            >
              តើពេលវេលាអស្ចារ្យនេះនឹងកើតឡើងនៅទីណា?
            </h2>
            <br></br>
            <p>
              Save the date <span>❤️</span> : ថ្ងៃអាទិត្យ ទី១ ខែមីនា ឆ្នាំ២០២៦
            </p>
            <br></br>
            <h2>
              ជ្រើសរើសទីកន្លែងដ៏ល្អឥតខ្ចោះ ដែលបង្ហាញពីស្នេហារបស់អ្នកទាំងពីរ។
            </h2>
            <MapTabs />
          </div>
        </div>
      </section>
      <section id="agenda" className="container-full section-styles">
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
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <ScheduleTable />
        </div>
      </section>
      {/* <section id="gallery" className="container-full section-styles">
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
                  <h2
                    style={marcellus.style}
                    className="text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center"
                  >
                    ប្រវត្តិស្នេហារបស់យើងតាមរយៈរូបភាព
                  </h2>
                  <p>
                    រូបភាពនីមួយៗជាផ្នែកមួយនៃរឿងរ៉ាវស្នេហារបស់យើង
                    ពីពេលវេលាសាមញ្ញរហូតដល់ពេលវេលាពិសេស។
                    យើងរំភើបចិត្តក្នុងការបង្កើតអនុស្សាវរីយ៍ថ្មីៗបន្តទៀត។
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-masonry columns-3 md:columns-6 w-full md:max-w-7xl mx-auto space-y-4">
            {galleryImages.map((el, index) => (
              <div key={index} className="gallery-item overflow-hidden">
                <Image src={el.url} alt={el.title} height={300} width={200} />
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
