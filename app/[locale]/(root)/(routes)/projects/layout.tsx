import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode[] }> = ({ children }) => {
	return <div className="container my-44">{children}</div>;
};

export default Layout;
