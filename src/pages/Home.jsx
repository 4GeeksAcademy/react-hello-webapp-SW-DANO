import { useState } from "react";
import { SwCard } from "../components/SwCard";

export const Home = () => {
	const [category, setCategory] = useState(null);

	const data = {
		characters: [
			{
				id: 1,
				name: "Luke Skywalker",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/luke/400/300"
			},
			{
				id: 4,
				name: "Darth Vader",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/vader/400/300"
			},
			{
				id: 5,
				name: "Leia Organa",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/leia/400/300"
			},
			{
				id: 10,
				name: "Obi-Wan Kenobi",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/obiwan/400/300"
			},
			{
				id: 20,
				name: "Yoda",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/yoda/400/300"
			},
			{
				id: 14,
				name: "Han Solo",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/hansolo/400/300"
			}
		],

		starships: [
			{
				id: 10,
				name: "Millennium Falcon",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/falcon/400/300"
			},
			{
				id: 12,
				name: "X-Wing",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/xwing/400/300"
			},
			{
				id: 13,
				name: "TIE Fighter",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/tie/400/300"
			},
			{
				id: 3,
				name: "Star Destroyer",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/destroyer/400/300"
			},
			{
				id: 21,
				name: "Slave I",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/slave1/400/300"
			},
			{
				id: 22,
				name: "Imperial Shuttle",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/shuttle/400/300"
			}
		],

		droids: [
			{
				id: 3,
				name: "R2-D2",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/r2d2/400/300"
			},
			{
				id: 2,
				name: "C-3PO",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/c3po/400/300"
			},
			{
				id: 85,
				name: "BB-8",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/bb8/400/300"
			},
			{
				id: 19,
				name: "IG-88",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/ig88/400/300"
			},
			{
				id: 87,
				name: "K-2SO",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/k2so/400/300"
			},
			{
				id: 79,
				name: "General Grievous",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://picsum.photos/seed/grievous/400/300"
			}
		]
	};

	return (
		<div className="container mt-5">
			<div className="text-center mb-4">
				<h2>¿Qué quieres explorar?</h2>

				<div className="d-flex justify-content-center gap-2 mt-3">
					<button className="btn btn-outline-primary" onClick={() => setCategory("characters")}>
						Personajes
					</button>
					<button className="btn btn-outline-success" onClick={() => setCategory("starships")}>
						Naves
					</button>
					<button className="btn btn-outline-warning" onClick={() => setCategory("droids")}>
						Androides
					</button>
				</div>
			</div>

			{category && (
				<div className="row">
					{data[category].map(item => (
						<div className="col-md-4 mb-4" key={item.id}>
							<SwCard
								id={item.id}
								title={item.name}
								description={item.description}
								image={item.image}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
