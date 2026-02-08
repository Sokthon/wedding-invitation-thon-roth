import qr from "@/public/aba-merchant.jpg";
import Image from "next/image";
import Link from "next/link";
import { moul } from "../fonts";

export default function QrScan() {
  return (
    <div className="mt-20">
      <h2
        style={moul.style}
        className="text-lg font-semibold text-gray-800 mb-4 text-center"
      >
        ចំណងដៃ
      </h2>
      <div className="bg-white rounded-2xl shadow-xl p-6  max-w-96 text-center">
        <div className="bg-gray-50 rounded-xl p-4 mb-4 flex justify-center items-center">
          <Image
            src={qr}
            width={240}
            alt="QRCode"
            className="h-auto object-contain mb-3.5"
          />
        </div>
        <Link
          style={moul.style}
          className="block my-5 underline"
          href={"https://link.payway.com.kh/ABAPAY4n414095i"}
        >
          សំរាប់ABA Linkសូមចុចទីនេះ
        </Link>
        <p className="text-lg text-gray-500">
          ស្កេនដើម្បីផ្តលក្តីស្រលាញ់ដល់គូស្វាមីភរិយាថ្មី 💙
        </p>
      </div>
    </div>
  );
}
