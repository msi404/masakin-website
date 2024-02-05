import React, { Fragment } from "react";
import { ProjectType } from "@/types/ui";
import FeatuersProjectsCarosuel from "@/components/featuers-projects-carosuel";

const Projects: React.FC<{ projects: any }> = ({ projects }) => {
	return (
		<Fragment>
			<FeatuersProjectsCarosuel projects={projects} />
		</Fragment>
	);
};

export default Projects;
