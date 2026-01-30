import React, { createContext, useReducer } from "react";

export const Context = createContext(null);

const initialStore = {
	favorites: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case "toggle_favorite": {
			const exists = state.favorites.includes(action.payload);

			return {
				...state,
				favorites: exists
					? state.favorites.filter(item => item !== action.payload)
					: [...state.favorites, action.payload]
			};
		}

		default:
			return state;
	}
};

export const StoreProvider = ({ children }) => {
	const [store, dispatch] = useReducer(reducer, initialStore);

	return React.createElement(
		Context.Provider,
		{ value: { store, dispatch } },
		children
	);
};
