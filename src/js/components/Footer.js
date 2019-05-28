import React from "react";

//create your first component
export default class Footer extends React.Component {
	render() {
		return (
			<footer className="text-muted">
				<div className="container">
					<p className="float-right">
						<a href="#">Back to the very top</a>
					</p>
					<p>
						This is the footer. It has some really interesting
						information, like this.!
					</p>
					<p>
						You might find a listing for various site sections,
						company information, and maybe the secret to life.
					</p>
				</div>
			</footer>
		);
	}
}
