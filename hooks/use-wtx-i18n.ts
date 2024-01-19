"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const useWtxI18n = () => {
	const {
		i18n: { dir, language },
	} = useTranslation();

	useEffect(() => {
		document.dir = dir();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language]);
};

export default useWtxI18n;
