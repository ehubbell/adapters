import Dayjs from 'dayjs';

export const env = process.env.NEXT_PUBLIC_NODE_ENV;

export const sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

export const getSeconds = () => {
	return Math.floor(Date.now() / 1000);
};

export const getRandomInt = (max = 1000000) => {
	return Math.floor(Math.random() * max);
};

export const addObject = (array = [], record): any => {
	return !array.includes(record) ? array.concat(record) : array;
};

export const addOrRemoveObject = (array = [], record): any => {
	return array.includes(record) ? removeObject(array, record) : array.concat(record);
};

export const removeObject = (array = [], record): any => {
	return array.filter(a => a !== record);
};

export const mapChildren = (data, key) => {
	const flatData = [];
	data.map(record => {
		const value = record[key];
		if (isArray(value)) {
			const childData = mapChildren(value, key);
			childData.map(v => flatData.push(v));
		}
		return flatData.push(record);
	});
	return flatData;
};

export const chunkArray = (array, chunkSize) => {
	let index = 0;
	const chunks = [];
	while (index < array.length) {
		const chunk = array.slice(index, index + chunkSize);
		index += chunkSize;
		chunks.push(chunk);
	}
	return chunks;
};

export const timeElapsed = (startDate, interval = 'ms') => {
	return Dayjs(new Date()).diff(startDate, interval as any) + interval;
};

export const listBuilder = (count = 1) => {
	return [...new Array(count)].map((v, i) => i);
};

export const fakeDownload = async (response, fileName) => {
	if (typeof window === 'undefined') return;
	// Create blob
	const blob = await response.blob();
	const newBlob = new Blob([blob]);
	const blobUrl = window.URL.createObjectURL(newBlob);
	// Create fake link
	const link = document.createElement('a');
	link.href = blobUrl;
	link.setAttribute('download', fileName);
	document.body.appendChild(link);
	link.click();
	link.parentNode.removeChild(link);
	// clean up fake link
	window.URL.revokeObjectURL(blobUrl);
};

export const computeBytes = (data = 0, type = 'kb') => {
	switch (type) {
		case 'gb':
			return parseFloat((data / 1024 / 1024 / 1024).toFixed(2));

		case 'mb':
			return parseFloat((data / 1024 / 1024).toFixed(2));

		case 'kb':
			return parseFloat((data / 1024).toFixed(2));

		default:
			return parseFloat(data.toFixed(2));
	}
};

export const displayBytes = (data, type = 'kb') => {
	return computeBytes(data, type) + ' ' + type;
};

export const stripHtmlEntities = (data = '') => {
	return data.replace(/(<([^>]+)>)/gi, '');
};

export const parseBoolean = value => {
	return value === 'true' || value === true ? true : false;
};

export const isArray = data => {
	return Array.isArray(data);
};

export const isObject = data => {
	return data !== null && data && typeof data === 'object';
};

export const isString = data => {
	return typeof data === 'string';
};

export const isDate = data => {
	return isObject(data) && typeof data.getMonth === 'function';
};

export const isEmpty = data => {
	if (data === null || data === undefined || data === 'undefined') {
		return true;
	}
	if (isArray(data)) {
		return data.length === 0 ? true : false;
	}
	if (isObject(data)) {
		return Object.keys(data).length === 0 ? true : false;
	}
	return data.length === 0 ? true : false;
};

// Docs
// https://www.w3schools.com/js/js_typeof.asp#:~:text=In%20JavaScript%20null%20is%20%22nothing,typeof%20null%20is%20an%20object.
