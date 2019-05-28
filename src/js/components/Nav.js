import React from "react";
import { Link } from "react-router-dom";

//create your first component
export default class Nav extends React.Component {
	render() {
		return (
			<div className="navbar navbar-dark bg-dark shadow-sm">
				<div className="container d-flex justify-content-between">
					<ul className="nav">
						<li className="nav-item">
							<Link className="navbar-brand" to="/Home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="navbar-brand" to="/AboutUs">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="navbar-brand" to="/Services">
								Services
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
