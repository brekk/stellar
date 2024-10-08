import Raw from "@/assets/madlib-logo.svg";
import blem from "blem";
import "@/components/logo/style.scss";

interface LogoProps {
	animate?: boolean
	className?: string
	size?: "large" | "medium" | "small"
}

export function Logo({ animate = false, className, size = "medium" }: LogoProps) {
	const bem = blem("logo")
	return <Raw
		className={`${className} ${bem("", [size, animate ? "animated" : "static"])}`} />
}

export default Logo
