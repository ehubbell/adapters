# Overview
A collection of networking adapters for various projects.
Each adapter offers a wrapper around a base networking library (ie `cross-fetch`) that will simplify your implementation while covering basic use-cases.
For advanced scenarios, you can unpack the logic in each adapter and tailor it to your use-case.
By abstracting this logic into a package, we're able to reduce and consolidate the boilerplate code necessary for each project.

## Installation
```
npm install @ehubbell/adapters
```

## Usage
```tsx
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

```


## Development
This project uses [yalc](https://npmjs.com/package/yalc) for local development.
- npm run dev
- switch to project
- npx yalc add @ehubbell/adapters
- After that, this library should hot reload into the consuming application

## Scripts
- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky
- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author
- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com

## Notes
To see this library in action, checkout the following projects:
- [playbooks](https://www.playbooks.xyz)
- [playbooks blog](https://blog.playbooks.xyz)
- [playbooks docs](https://docs.playbooks.xyz)