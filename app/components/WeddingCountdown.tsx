"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const WEDDING_DATE = new Date("2026-03-01T00:00:00");

function getTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const diff = WEDDING_DATE.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Wedding Day
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Counting Down to Forever
        </h2>
      </div>
      <div className="flex gap-3 md:gap-6">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>
      <div className="h-px w-24 bg-linear-to-r from-transparent via-gray-400 to-transparent" />
      <p className="text-sm md:text-base text-gray-600">01 March 2026</p>
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="
        w-16 md:w-20
        rounded-xl
        bg-white
        shadow-sm
        ring-1 ring-gray-200
        py-3
        transition
        hover:-translate-y-0.5
      "
    >
      <div className="text-xl md:text-2xl font-semibold text-gray-900 cursor-pointer">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wider text-gray-500 ">
        {label}
      </div>
    </div>
  );
}
