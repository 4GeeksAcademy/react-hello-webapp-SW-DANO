import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Detalles from "./pages/Detalles";
import { Navbar } from "./components/Navbar";
import Favoritos from "./pages/Favorites";

export const AppRoutes = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/detalles/:id" element={<Detalles />} />
			<Route path="/favoritos" element={<Favoritos />} />
		</Routes>
	</BrowserRouter>
);
