import { useContext } from "react";
import { Context } from "../store";

const Favoritos = () => {
	const { store, dispatch } = useContext(Context);

	return (
		<div className="container mt-5">
			<h2>Favoritos</h2>

			<ul>
				{store.favorites.map((fav, index) => (
					<li key={index}>
						{fav}
						<button
							className="btn btn-sm btn-danger ms-2"
							onClick={() =>
								dispatch({
									type: "remove_favorite",
									payload: fav
								})
							}
						>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Favoritos;
