import React from 'react';

import { BaseAdapter } from '@ehubbell/adapters';

const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
	// Computed
	const client = new BaseAdapter({ domain: process.env.NEXT_PUBLIC_API_DOMAIN });

	// Methods
	const request = async ({ method = 'GET', url, headers, params, data }) => {
		return await client.apiRequest({ method, url, headers, params, data });
	};

	// Render
	return <StoreContext.Provider value={{ request }}>{children}</StoreContext.Provider>;
};

const useStore = () => {
	return React.useContext(StoreContext);
};

export { StoreProvider, useStore };
