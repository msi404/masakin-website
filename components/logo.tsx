import Image from "next/image";
import logo from "@/public/logo.jpeg";

const Logo = () => {
	return <Image src={logo} width={70} height={70} alt="logo" />;
};

export default Logo;
