import { Kantumruy_Pro, Marcellus, Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});
const khmer = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600", "700"],
});

export { khmer, marcellus, montserrat };
