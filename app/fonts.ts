import {
  Battambang,
  Kantumruy_Pro,
  Marcellus,
  Montserrat,
  Moul,
} from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});
const khmer = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600", "700"],
});

export const battambang = Battambang({
  subsets: ["khmer"],
  weight: ["400", "700"],
});

export const moul = Moul({
  subsets: ["khmer"],
  weight: ["400"],
});

export { khmer, marcellus, montserrat };
