import LocalizedStrings from "react-localization";
import { localeMK } from "./LocaleMK";
import { localeES } from "./LocaleES";
import { localeEN } from "./LocaleEN";

export const LOCALE = new LocalizedStrings({
  en: localeEN,
  mk: localeMK,
  es: localeES,
});

const storedLocale = localStorage.getItem("locale");

if (storedLocale) {
  LOCALE.setLanguage(storedLocale);
} else {
  window.localStorage.setItem("locale", "en");
  LOCALE.setLanguage("en");
}

export const changeLanguage = (languageCode) => {
  var lng = window.localStorage.getItem("locale");
  if (typeof languageCode === "string" && (!lng || lng !== languageCode)) {
    window.localStorage.setItem("locale", languageCode);
    window.location.reload();
  }
};
