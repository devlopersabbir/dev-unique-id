import {type UniqueIdOptions} from '../@types';

export const ALL_CHARSET = 'abcdefghijklmnopqrstuvwxyx';
export const ALL_ALPHABET = '1234567890';
export const TIME_STAMP = Date.now().toString(36);

export const defaultValue: UniqueIdOptions = {
	length: 12,
	alphabet: true,
	charset: false,
	timestamp: false,
	custom: [],
};
