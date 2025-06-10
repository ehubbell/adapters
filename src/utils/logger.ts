const errorStyles = 'color: crimson';
const infoStyles = 'color: cadetblue';
const successStyles = 'color: aquamarine';

export const log = (title, ...data) => {
	return console.log(title, ...data);
};

export const debug = (title, ...data) => {
	// process.env.NODE_SERVER ? logNode.debug(title, ...data) : logBrowser.debug(title, ...data);
	return console.debug(`%c${title}`, infoStyles, ...data);
};

export const info = (title, ...data) => {
	// process.env.NODE_SERVER ? logNode.info(title, ...data) : logBrowser.info(title, ...data);
	return console.info(`%c${title}`, successStyles, ...data);
};

export const warn = (title, ...data) => {
	// process.env.NODE_SERVER ? logNode.warn(title, ...data) : logBrowser.warn(title, ...data);
	return console.warn(`%c${title}`, errorStyles, ...data);
};

export const error = (title, ...data) => {
	// process.env.NODE_SERVER ? logNode.error(title, ...data) : logBrowser.error(title, ...data);
	return console.error(`%c${title}`, errorStyles, ...data);
};

// Docs:
// https://developer.mozilla.team/en-US/docs/Web/API/Console
// https://betterstack.com/docs/logs/javascript/install/
