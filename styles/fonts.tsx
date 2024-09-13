import { Fira_Code, Antonio } from "next/font/google";

const fontAntonio = Antonio({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-antonio",
});

const fontFiraCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-fira",
});

export const fonts = `${fontAntonio.variable} ${fontFiraCode.variable} ${fontAntonio.className} ${fontFiraCode.className}`

export default fonts
