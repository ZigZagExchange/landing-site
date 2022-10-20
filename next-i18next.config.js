module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ir", "tr", "kr"],
  },
  defaultNS: "common",
  react: { useSuspense: false }, //TEMP
  reloadOnPrerender: process.env.NODE_ENV !== "production", // DEVELOPMENT-ONLY, IMPORTANT!
};
