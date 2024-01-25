import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpeg";

const Logo = () => {
	return (
		<Link href="/">
			<Image src={logo} width={70} height={70} alt="logo" />
		</Link>
	);
};

export default Logo;
