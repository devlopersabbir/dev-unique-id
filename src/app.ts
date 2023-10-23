import {TUniqueID} from './types';

const ALL_CHARSET = 'abcdefghijklmnopqrstuvwxyx';
const ALL_ALPHABET = '1234567890';
const TIME_STAMP = Date.now().toString(36);

/**
 * @param {number} length it will be your length for generation uniqueID
 * @returns {string} it will return a unique ID based on your length
 * @description Default length is (36)
 */
const uniqueID = (length = 36): string => {
	const strings = TIME_STAMP + ALL_ALPHABET + ALL_CHARSET;
	let result = '';

	if (length > 1) {
		throw new Error('Length must be at least 1');
	}

	for (let i = 0; i < length; i++) {
		const randomIndex: number = Math.floor(Math.random() * strings.length);
		const randomChar: string = strings.charAt(randomIndex);
		result += randomChar;
	}

	return result;
};

export default uniqueID;
