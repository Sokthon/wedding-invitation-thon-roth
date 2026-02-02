"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoogleMapComponent from "./GoogleMap";

const MapTabs: React.FC = () => {
  return (
    <div className="tabs-container w-full text-center my-5">
      <div className="tabs flex justify-center mb-5"></div>
      <div className="tab-content flex flex-col md:flex-row justify-center items-center">
        <div className="map-container w-100 h-100 ">
          <Link
            className="block pb-3"
            target="_blank"
            href={"https://maps.app.goo.gl/H5zuZK6JcfFDwcjy6"}
          >
            ចុចទីនេះសំរាប់ទីតាំង
          </Link>

          <GoogleMapComponent />
        </div>
        <div className="image-container flex justify-center items-center ml-0 mt-5 md:mt-0 md:ml-5  w-100 h-100">
          <Image
            src="/limlong-kpc.jpg"
            alt="lim long garage station"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MapTabs;
