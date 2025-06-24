export const splitText = (text: string) => {
  return text.split("").map((char, i) => ({
    char,
    key: `${char}-${i}`,
  }));
};
