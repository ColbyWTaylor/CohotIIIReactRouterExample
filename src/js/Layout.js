import React from "react";

//Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Views
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Services from "./views/Services";
import JoinUs from "./views/JoinUs";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//create your first component
export default class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Nav />
				<div>
					<Switch>
						<Route path="/Services" component={Services} />
						<Route exact path="/AboutUs" component={AboutUs} />
						<Route path="/" component={Home} />
						<Route path="/Home" component={Home} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		);
	}
}
