import type { NextPage } from "next";
import New from "@/components/new";

const Page: NextPage = () => {
	return (
		<div className="my-24 space-y-10 flex flex-col lg:space-x-5 lg:flex-row lg:space-y-0 justify-between">
			<New href="dashboard/new-project" title="New Project" />
			<New href="dashboard/new-project" title="New Service" />
			<New href="dashboard/new-project" title="New Agency" />
		</div>
	);
};

export default Page;
