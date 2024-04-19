import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const fonts = {
  roboto,
};
