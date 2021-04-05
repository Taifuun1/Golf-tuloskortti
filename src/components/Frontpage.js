import React from 'react';
import {
  Link
} from "react-router-dom";

const Frontpage = () => {
	return (
		<div className="container flexColumn">
			<div className="container flexAlignMiddle quarterHeight frontpage__header">
				<h2 className="frontpage__title">Golf Tuloskortti</h2>
			</div>
			<div className="container flexAlignMiddle flexFillSpace">
				<Link to="/scorecard">
					<button className="frontpage__play_button">Pelaa</button>
				</Link>
			</div>
		</div>
	);
}

export default Frontpage;
