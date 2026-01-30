import { useParams, useNavigate } from "react-router-dom";

const Detalles = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-5">
					<img
						src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
						alt="detalle"
						className="img-fluid rounded"
						onError={(e) => {
							e.target.src =
								"https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
						}}
					/>
				</div>

				<div className="col-md-7">
					<h1 className="mb-4">Detalle del personaje</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<button
						className="btn btn-secondary mt-3"
						onClick={() => navigate(-1)}
					>
						← Volver
					</button>
				</div>
			</div>
		</div>
	);
};

export default Detalles;
