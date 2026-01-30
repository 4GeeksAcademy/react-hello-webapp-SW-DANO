import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store";
import swlogo from "../assets/img/star-wars-logo-0.jpg";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src={swlogo} alt="Star Wars Logo" style={{ height: "60px" }} />
				</Link>

				<div className="ms-auto">
					<Link to="/favoritos">
						<button className="btn btn-primary">
							Favoritos ({store.favorites.length})
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
