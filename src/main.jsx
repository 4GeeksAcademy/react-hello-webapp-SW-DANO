import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes";
import { StoreProvider } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StoreProvider>
			<AppRoutes />
		</StoreProvider>
	</React.StrictMode>
);
