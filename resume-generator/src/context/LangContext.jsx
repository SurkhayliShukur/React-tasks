import React, { createContext, useContext, useState, useEffect} from "react";
import { useTranslation } from "react-i18next";


const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);


    const changeLang = (language) => {
        setCurrentLang(language);
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
        console.log("Selected language:", language);
    };
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setCurrentLang(savedLanguage);
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <LangContext.Provider value={{ currentLang, changeLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);