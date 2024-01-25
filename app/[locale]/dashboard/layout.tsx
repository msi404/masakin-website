import React, { ReactNode, Fragment } from "react";
import AdminNav from "@/components/header/admin-nav";
const Layout: React.FC<{ children: ReactNode[] }> = ({ children }) => {
	return (
		<Fragment>
			<AdminNav />
			<div className="container my-10 mt-44 space-y-24">{children}</div>
		</Fragment>
	);
};

export default Layout;
