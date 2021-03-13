import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	const cardsNumber = props.max;
	const cards = [];
	for (let i = 0; i < cardsNumber; i++) {
		cards.push(
			<div className="col mb-4">
				<div
					className="card text-center h-100"
					style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://picsum.photos/300/200"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		);
	}
	return <div className="row row-cols-1 row-cols-md-4">{cards};</div>;
}

Card.propTypes = {
	max: PropTypes.number
};
