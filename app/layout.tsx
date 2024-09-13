import { Fira_Code, Antonio } from "next/font/google";
import "@/Root.scss";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${fontAntonio.variable} ${fontFiraCode.variable} ${fontAntonio.className} ${fontFiraCode.className}`}
			>
				{children}
			</body>
		</html>
	);
}
