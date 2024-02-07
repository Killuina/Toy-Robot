export const removeTextExtraSpacesAndCommas = (text: string) => {
  return text.replace(/,/g, "").replace(/\s+/g, " ").trim();
};
