import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//create your first component
export default class Home extends React.Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Main Content</h1>
					<p className="lead">This page is the home page.</p>
				</div>
				<div className="card-columns">
					<div className="card">
						<img
							src="https://www.scified.com/articles/new-monster-from-godzilla-aftershock-comic-unveiled-2.jpg"
							className="card-img-top"
							alt="..."
						/>

						<div className="card-body">
							<h5 className="card-title">
								Card title that wraps to a new line
							</h5>
							<p className="card-text">
								This is a longer card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
					</div>
					<div className="card p-3">
						<blockquote className="blockquote mb-0 card-body">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Integer posuere erat a ante.
							</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in{" "}
									<cite title="Source Title">
										Source Title
									</cite>
								</small>
							</footer>
						</blockquote>
					</div>
					<div className="card">
						<img
							src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1554911148467-5LT8L82A9DPMW84UUN7I/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/three-new-tv-spots-for-godzilla-king-of-the-monsters-feature-awesome-monster-mayhem-social.jpg?format=2500w"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This card has supporting text below as a natural
								lead-in to additional content.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card bg-primary text-white text-center p-3">
						<blockquote className="blockquote mb-0">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Integer posuere erat.
							</p>
							<footer className="blockquote-footer text-white">
								<small>
									Someone famous in{" "}
									<cite title="Source Title">
										Source Title
									</cite>
								</small>
							</footer>
						</blockquote>
					</div>
					<div className="card text-center">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This card has a regular title and short
								paragraphy of text below it.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src="https://ewedit.files.wordpress.com/2018/12/godzilla-1.jpg"
							className="card-img-top"
							alt="..."
						/>
					</div>
					<div className="card p-3 text-right">
						<blockquote className="blockquote mb-0">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Integer posuere erat a ante.
							</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in{" "}
									<cite title="Source Title">
										Source Title
									</cite>
								</small>
							</footer>
						</blockquote>
					</div>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is another card with title and supporting
								text below. This card has some additional
								content to make it slightly taller overall.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
