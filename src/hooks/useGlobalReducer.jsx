import { useReducer } from "react";
import { storeReducer, initialStore } from "../store";

const useGlobalReducer = () => {
	const [store, dispatch] = useReducer(storeReducer, initialStore);
	return { store, dispatch };
};

export default useGlobalReducer;
