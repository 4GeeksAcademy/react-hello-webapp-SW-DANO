import { useContext } from "react";
import { Context } from "../store";
import { Link } from "react-router-dom";

export const SwCard = ({ id, title, description, image }) => {
	const { store, dispatch } = useContext(Context);

	const isFav = store.favorites.includes(title);

	return (
		<div className="card h-100" style={{ width: "18rem" }}>
			<img src={image} className="card-img-top" alt={title} />

			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>

				<div className="mt-auto d-flex justify-content-between">
					<Link to={`/detalles/${id}`}>
						<button className="btn btn-outline-primary">
							Detalles
						</button>
					</Link>

					<button
						className={`btn ${isFav ? "btn-danger" : "btn-outline-danger"}`}
						onClick={() =>
							dispatch({
								type: "toggle_favorite",
								payload: title
							})
						}
					>
						{isFav ? "❤️" : "🤍"}
					</button>
				</div>
			</div>
		</div>
	);
};
