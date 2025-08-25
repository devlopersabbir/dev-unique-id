import { UniqueIdOptions } from "./@types";
import {
  ALL_ALPHABET,
  ALL_CHARSET,
  defaultValue,
  TIME_STAMP,
} from "./constants";

/**
 * Generates a random unique ID string based on the provided options.
 *
 * The ID is constructed from a character pool that may include:
 * - Alphabet characters (0-9)
 * - Charset characters (a-z)
 * - A base-36 timestamp
 * - Custom characters provided by the user
 *
 * If multiple sources are enabled, characters will be randomly selected
 * from the combined pool.
 *
 * @function uniqueID
 * @param {UniqueIdOptions} [options] - Configuration options for ID generation.
 * @param {number} [options.length=12] - Desired length of the ID. Must be >= 1.
 * @param {boolean} [options.alphabet=true] - Include numeric characters (0-9).
 * @param {boolean} [options.charset=false] - Include alphabet characters (a-z).
 * @param {boolean} [options.timestamp=false] - Include a base-36 timestamp in the character pool.
 * @param {string[]} [options.custom=[]] - Custom characters to include in the pool.
 *
 * @returns {string} A randomly generated unique ID of the specified length.
 *
 * @throws {Error} If `length` is less than 1.
 * @throws {Error} If no character sources are enabled or provided.
 *
 * @example
 * uniqueID();
 * // => "3h7g9q1p5s2b"
 *
 * @example
 * uniqueID({ length: 16, alphabet: true, charset: true });
 * // => "4d7f9bcz12vqmk3x"
 *
 * @example
 * uniqueID({ length: 10, custom: ['X', 'Y', 'Z'] });
 * // => "YZXZXZXYXY"
 */
const uniqueID = (options: UniqueIdOptions = {}): string => {
  const {
    length = defaultValue.length!,
    alphabet = defaultValue.alphabet,
    charset = defaultValue.charset,
    timestamp = defaultValue.timestamp,
    custom = defaultValue.custom,
  } = options;

  if (length < 1) {
    throw new Error("Length must be at least 1");
  }

  let characters = "";

  if (timestamp) {
    characters += TIME_STAMP;
  }

  if (alphabet) {
    characters += ALL_ALPHABET;
  }

  if (charset) {
    characters += ALL_CHARSET;
  }

  if (custom && custom.length > 0) {
    characters += custom.join("");
  }

  if (characters.length === 0) {
    throw new Error(
      "At least one character source must be enabled or provided."
    );
  }

  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};

export default uniqueID;
