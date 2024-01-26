import React, { ReactNode, Fragment } from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AdminNav from "@/components/header/admin-nav";
const Layout: React.FC<{ children: ReactNode[] }> = async ({ children }) => {
	const { isAuthenticated } = getKindeServerSession();
	return (await isAuthenticated()) ? (
		<Fragment>
			<AdminNav />
			<div className="container my-10 mt-44 space-y-24">{children}</div>
		</Fragment>
	) : (
		<div className="container mt-56 flex justify-center space-x-2">
			<span>This page is protected, please</span>
			<LoginLink className="text-blue-600">Login</LoginLink>
			<span>to view it</span>
		</div>
	);
};

export default Layout;
