"use server";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { store } from "@/lib/firebase";
import type { ProjectType, ServiceType, AgencyType } from "@/types/ui";

const projectsCollection = collection(store, "projects");
const agenciesCollection = collection(store, "agencies");
const servicesCollection = collection(store, "services");
const emailsCollection = collection(store, "emails");
export const createProject = async ({
	title,
	caption,
	thumnail,
	firstImage,
	secondImage,
	thirdImage,
}: ProjectType) => {
	try {
		await addDoc(projectsCollection, {
			title: title,
			caption: caption,
			thumnail: thumnail,
			firstImage: firstImage,
			secondImage: secondImage,
			thirdImage: thirdImage,
		});
	} catch (error: any) {
		console.log(error.message);
	}
};

export const deleteProject = async (id: string) => {
	await deleteDoc(doc(projectsCollection, id));
};

export const createAgency = async ({
	title,
	caption,
	logo,
	image,
}: AgencyType) => {
	try {
		await addDoc(agenciesCollection, {
			title: title,
			caption: caption,
			logo: logo,
			image: image,
		});
	} catch (error: any) {
		console.log(error.message);
	}
};

export const deleteAgency = async (id: string) => {
	await deleteDoc(doc(agenciesCollection, id));
};

export const createService = async ({ title, caption, image }: ServiceType) => {
	try {
		await addDoc(servicesCollection, {
			title: title,
			caption: caption,
			image,
		});
	} catch (error: any) {
		console.log(error.message);
	}
};

export const deleteService = async (id: string) => {
	await deleteDoc(doc(servicesCollection, id));
};

export const sendEmail = async ({
	name,
	email,
	message,
}: {
	name: string;
	email: string;
	message: string;
}) => {
	try {
		await addDoc(emailsCollection, {
			name: name,
			email: email,
			message: message,
		});
	} catch (error: any) {
		console.log(error.message);
	}
};

export const deleteEmail = async (id: string) => {
	await deleteDoc(doc(emailsCollection, id));
};