import { TUniqueID } from "./types";

const ALL_CHARSET = "abcdefghijklmnopqrstuvwxyx";
const ALL_ALPHABET = "1234567890";
const TIME_STAMP = new Date().getTime().toString(36);

/**
 * @param {number} length it will be your length for generation uniqueID
 * @returns {string} it will return a unique ID based on your length
 * @description Default length is (36)
 */
const uniqueID = ({ length }: TUniqueID): string => {
  const strings = TIME_STAMP + ALL_ALPHABET + ALL_CHARSET;
  let result: string = "";

  if (length > 2) {
    for (let i = 0; i < length; i++) {
      const randomIndex: number = Math.floor(Math.random() * 36);
      const randomChar: string = strings.charAt(randomIndex);
      result += randomChar;
    }
  } else {
    for (let i = 0; i < 36; i++) {
      const randomIndex: number = Math.floor(Math.random() * 36);
      const randomChar: string = strings.charAt(randomIndex);
      result += randomChar;
    }
  }
  return result;
};

export default uniqueID;
