import React from "react";
import { Navbar, Jumbotron } from "./componentes.js";
import { Card } from "./card.js";

export function Landing() {
	return (
		<div className="container-fluid m-0 p-0">
			<Navbar />
			<div className="container mt-3 p-8">
				<Jumbotron />
				<Card max="4" />
			</div>
		</div>
	);
}
